import {combineReducers} from 'redux';
import gameReducers from './gamesReducers';
import detailsReducer from './detailsReducer';

const rootReducers = combineReducers({
    games: gameReducers,
    details: detailsReducer
});

export default rootReducers;