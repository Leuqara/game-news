import axios from 'axios';
import {popularGamesURL, upComingGamesURL, newGamesURL} from '../api';

export const loadGames = () => async(dispatch) => {

    const popularGameData = await axios.get(popularGamesURL());
    const upComingGameData = await axios.get(upComingGamesURL());
    const newGameData = await axios.get(newGamesURL());

    dispatch({
        type: 'FETCH_GAMES',
        payload: { 
            popularGames: popularGameData.data.results,
            newGames: upComingGameData.data.results,
            upComingGames: newGameData.data.results
        }
    }) 
};