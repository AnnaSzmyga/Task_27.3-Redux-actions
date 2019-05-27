import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function editComment(id, text) {
    return {
        type: ADD_COMMENT,
        id,
        text
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        rating: rating + 1
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        rating: rating - 1
    }
}

export ADD_COMMENT;
export REMOVE_COMMENT;
export EDIT_COMMENT;
export THUMB_UP_COMMENT;
export THUMB_DOWN_COMMENT;