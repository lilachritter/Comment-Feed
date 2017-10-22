import React, { Component } from 'react';
import Comment from './Comment';
import FilterBox from './FilterBox';
import ReactLoading from 'react-loading';
import '../stylesheets/commentsBody.css';

const COLOR = '#dce3e8';
const WIDTH = '75';
const HEIGHT = '75';

class CommentsBody extends Component {

    componentDidMount() {
        this.props.getAllComments();
    }

    render() {
        return(
            <div className="comments-body-wrapper">
                <FilterBox onFilterChange={this.props.onFilterChange}/>
                <div className="comments-body__comments">
                    {this.props.isLoading && <ReactLoading type="bubbles" className="comments-body__loading" color={COLOR} height={HEIGHT} width={WIDTH}/>}
                    {this.props.comments && this.props.comments.map((comment, index) =>
                        <Comment key={`comment-${index}`}
                                 email={comment.email}
                                 text={comment.text}
                        />)}
                </div>
            </div>
        );
    }
}

CommentsBody.propTypes = {
    getAllComments: React.PropTypes.func,
    isLoading: React.PropTypes.bool,
    comments: React.PropTypes.array
}

export default CommentsBody;