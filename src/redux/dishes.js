import * as ActionTypes from './ActionTypes';

/*We change the state and now it will take 3 parameters 
DISHES_LOADING return use es6 spread operator so it will take the current value of the state
ant second part will aplied modification to the state
action.payload carries the dishes information*/

export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch(action.type) {

        case ActionTypes.ADD_DISHES:
            return{...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return{...state, isLoading: true, errMess: null, dishes: []};

        case ActionTypes.DISHES_FAILED:
            return{...state, isLoading: false, errMess: action.payload, dishes: []};


        default:
            return state;
    }
}