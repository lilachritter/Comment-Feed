import { connect } from 'react-redux';
import ComposeComment from '../components/ComposeComment';
import { postComment } from '../actions/index';

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addComment: (comment) => {
            dispatch(postComment(comment));
        }
        // addComment: () => {
        //     dispatch(getComments());
        // }
    }
}

const ComposeCommentContainer = connect(mapStateToProps, mapDispatchToProps)(ComposeComment);

export default ComposeCommentContainer;