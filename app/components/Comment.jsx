import React, { Component } from 'react';
import '../stylesheets/comment.css';

class Comment extends Component {
    render() {
        return(
            <div className="comment-wrapper">
                <div className="comment-email">{this.props.email}</div>
                <div className="comment-text">{this.props.text}</div>
            </div>
        );
    }
}

Comment.propTypes = {
    email: React.PropTypes.String,
    text: React.PropTypes.String
}

export default Comment;