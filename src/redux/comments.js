
import * as ActionTypes from './ActionTypes';


/* we will use concat function that js supports 
state.concat pushes a new element in to the array but that will be a new object that will get created*/

export const Comments = (state = {
    errMess : null,
    comments: []
}, action) =>{
    switch(action.type){
        
        case ActionTypes.ADD_COMMENTS:
            return{...state, isLoading: false, errMess: null, comments: action.payload};
        
        case ActionTypes.COMMENTS_FAILED:
           return{...state, isLoading: false, errMess: action.payload, comments: []};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return {...state, comments:state.comments.concat(comment)};
        default:
            return state;
    }
}