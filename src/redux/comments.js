import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';


/* we will use concat function that js supports 
state.concat pushes a new element in to the array but that will be a new object that will get created*/

export const Comments = (state = COMMENTS, action) =>{
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);
        default:
            return state;
    }
}