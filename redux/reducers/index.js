import { combineReducers } from 'redux';
import countAgereducers from './countAgereducers';
import Navbarreducers from './Navbarreducers';
import userReducers from './userReducers';
import albumsReducers from './albumsReducers'

const rootReducer = combineReducers({
    countAgereducers,
    Navbarreducers,
    userReducers,
    albumsReducers
});

export default rootReducer;