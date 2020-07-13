import { createStore , combineReducers, applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



/*TO configure a store we need to create a store 
This createStore take two parameters
Combine reducer is a method redux provides to combine all the reducers that we split
Both thunk and logger are supplied as enhancers for our store*/ 

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({

            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders

        }),
        applyMiddleware(thunk, logger)
   
    );
    return store;
}