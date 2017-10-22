import React, { Component } from 'react';
import '../stylesheets/composeComment.css';

const EMAIL_REGEX = /(.+)@(.+){2,}\.(.+){2,}/;
const EMAIL_ERROR = 'Please enter valid email';
const TEXT_ERROR = 'Please enter some text';

class ComposeComment extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this._handleSubmit.bind(this);
        this.onInputChange = this._onInputChange.bind(this);
        this.onTextChange = this._onTextChange.bind(this);
        this.validateInput = this._validateInput.bind(this);

        this.state = {
            email: '',
            text: ''
        };
    }

    render() {
        return (
            <div className="compose-comment-wrapper">
                <div className="input-fields">
                    <input type="email" placeholder="Email" onChange={this.onInputChange} value={this.state.email}/>
                    <textarea type="text" placeholder="Message" onChange={this.onTextChange} value={this.state.text}/>
                </div>
                <div className="submit">
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>

            </div>
        );
    }

    _handleSubmit() {
        if (!this.validateInput()) {
            return;
        };
        this.props.addComment(this.state);
        this.setState({
            email: '',
            text: ''
        });
    }

    _onInputChange(e) {
        this.setState({ email: e.target.value });
    }

    _onTextChange(e) {
        this.setState({ text: e.target.value });
    }

    _validateInput() {
        if (!EMAIL_REGEX.test(this.state.email)) {
            alert(EMAIL_ERROR);
            return false;
        } else if (this.state.text.length === 0) {
            alert(TEXT_ERROR);
            return false;
        } else {
            return true;
        }
    }
}

ComposeComment.propTypes = {
    addComment: React.PropTypes.func
}

export default ComposeComment;