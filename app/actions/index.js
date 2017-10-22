import axios from "axios";

export const postCommentAction = comment => {
    return {
        type: 'POST_COMMENT',
        comment
    };
};

function getCommentsAction(data) {
    return {
        type: 'SET_COMMENTS',
        comments: data.map(comment => ({
            email: comment.email,
            text: comment.text
        }))
    };
}

function isLoadingAction(isLoading) {
    return {
        type: 'IS_LOADING',
        isLoading: isLoading
    };
}

export const getComments = () => {
    return dispatch => {
        dispatch(isLoadingAction(true));
        return axios.get(`http://localhost:3000/comments`)
            .then(response => dispatch(getCommentsAction(response.data)))
            .then(dispatch(isLoadingAction(false)))
            .catch(error => console.log(error));
    };
};

export const postComment = (comment) => {
    return dispatch => {
        return axios.post(`http://localhost:3000/comments`, {
                email: comment.email,
                text: comment.text
            })
            .then(response => dispatch(postCommentAction(response.data)))
            .catch(error => console.log(error));
    };
};

export const setFilterText = (filterText) => {
    return {
        type: 'SET_FILTER_TEXT',
        filterText
    };
};