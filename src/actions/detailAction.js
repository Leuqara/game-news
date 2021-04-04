import axios from 'axios';
import {gameDetailURL, gameScreenshotsURL} from '../api';

export const loadGameDetails = (id) => async(dispatch) =>{
    const gameDetails = await axios.get(gameDetailURL(id));
    const gameScreenshots = await axios.get(gameScreenshotsURL(id));

    dispatch({
        type: 'GAME_DETAILS',
        payload: { 
            game: gameDetails.data,
            screenshots: gameScreenshots.data.results
        }
    });
};

