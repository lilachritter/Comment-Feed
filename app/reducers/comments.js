const DEFAULT_STATE = {
    comments: [],
    filterText: '',
    isLoading: false
};

// jshint ignore:start
const comments = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SET_COMMENTS':
            return {
                ...state,
                comments: action.comments
            };
        case 'POST_COMMENT':
            return {
                ...state,
                comments: [...state.comments, action.comment]
            };
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                filterText: action.filterText
            };
        case 'IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };
        default: return state;
    }
};
// jshint ignore:end

export default comments;