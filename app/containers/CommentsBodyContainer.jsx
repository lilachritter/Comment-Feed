import { connect } from 'react-redux';
import CommentsBody from '../components/CommentsBody';
import { getComments , setFilterText} from '../actions/index';

const filterComments = (state) => {
    const comments = state.comments && state.comments.filter(comment =>
        comment.text.indexOf(state.filterText) > -1 || comment.email.indexOf(state.filterText) > -1);
    return comments;
}

const mapStateToProps = (state) => {
    const comments = !state.filterText ? state.comments : filterComments(state);
    return {
        comments: comments,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllComments: () => {
            dispatch(getComments());
        },
        onFilterChange: (filterText) => {
            dispatch(setFilterText(filterText));
        }
    }
}

const CommentsBodyContainer = connect(mapStateToProps, mapDispatchToProps)(CommentsBody);

export default CommentsBodyContainer;