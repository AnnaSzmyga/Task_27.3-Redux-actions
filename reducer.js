import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'

const initialState = {
    comments: [],
    users: []
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    rating: 0
                }
                , ...state]
            })
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            })
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(comment => {
                    if (comment.id === action.id) {
                        comment.text += 1;
                    }
                })
            })
        case THUMB_UP_COMMENT:
        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(comment => {
                    if (comment.id === action.id) {
                        comment.rating -= 1;
                    }
                })
            })
        default:
            return state;
    }
}