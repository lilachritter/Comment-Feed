import React, { Component } from 'react';
import ComposeCommentContainer from './containers/ComposeCommentContainer';
import CommentsBodyContainer from './containers/CommentsBodyContainer';
import './stylesheets/app.css';

class App extends Component {

    render() {
        return (
           <div className="commentFeed-wrapper">
                <ComposeCommentContainer
                    key="comment-compose"
                />
               <CommentsBodyContainer
                   key="comment-body"
               />
           </div>
        );
    }
}

export default App;