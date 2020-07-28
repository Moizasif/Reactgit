import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

/*We create a funtion addComment that takes 4 parameters and this is the data
that we including in the action object
and every action object should contain a type
the payloads a js object contains whatever so the data is sent back by the addComment
In the comments.js file we receive the action and act on it 
Fetch Dishes is going tobe the thunk here beacuase it return a function
settime out fuction gives dealy of 2000 milisec
and this thunk is doing 2 dispatches*/

export const addComment = (dishId , rating , author, comment) =>({
      type: ActionTypes.ADD_COMMENT,
      payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
      }
});

export const fetchDishes = () => (dispatch) => {
      dispatch(dishesLoading(true));

      return fetch(baseUrl + 'dishes')
      .then(response => response.json())
      .then(dishes => dispatch(addDishes(dishes)));
}

export const dishesLoading = () => ({
      type: ActionTypes.DISHES_LOADING
});


export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
        type: ActionTypes.ADD_DISHES,
        payload: dishes
});


export const fetchComments = () => (dispatch) => {
     

      return fetch(baseUrl + 'comments')
      .then(response => response.json())
      .then(comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errmess) => ({
      type: ActionTypes.COMMENTS_FAILED,
      payload: errmess
  });
  
  export const addComments = (comments) => ({
          type: ActionTypes.ADD_COMMENTS,
          payload: comments
  });


  export const fetchPromos = () => (dispatch) => {
      dispatch(promosLoading(true));

      return fetch(baseUrl + 'promotions')
      .then(response => response.json())
      .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
      type: ActionTypes.PROMOS_LOADING
});


export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
      type: ActionTypes.ADD_PROMOS,
      payload: promos
});