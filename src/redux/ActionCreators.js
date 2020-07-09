import * as ActionTypes from './ActionTypes';


/*We create a funtion addComment that takes 4 parameters and this is the data
that we including in the action object
and every action object should contain a type
the payloads a js object contains whatever so the data is sent back by the addComment
In the comments.js file we receive the action and act on it */

export const addComment = (dishId , rating , author, comment) =>({
      type: ActionTypes.ADD_COMMENT,
      payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
      }
});