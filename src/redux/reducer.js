import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState ={
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders:LEADERS
};

/*Reducer Function 
This Reducer Function is going to receive the current state and action
Cannot modify the state directly in Reducer
we only do immutable change and then return an updated version of the state from the reducer
By default we return a state
ES6 way to define the value of the parameter is initialState*/

export const Reducer = (state = initialState, action) =>{
   return state;
};