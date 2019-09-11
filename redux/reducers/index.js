import { combineReducers } from 'redux';
import countAgereducers from './countAgereducers';
import Navbarreducers from './Navbarreducers';
import userReducers from './userReducers';
import albumsReducers from './albumsReducers'
import photoReducers from './photoReducers'
import checkphotoreducers from './checkphotoreducers'
import checkReducersidphoto from './checkReducersidphoto'

const rootReducer = combineReducers({
    countAgereducers,
    Navbarreducers,
    userReducers,
    albumsReducers,
    photoReducers,
    checkphotoreducers,
    checkReducersidphoto
});

export default rootReducer;