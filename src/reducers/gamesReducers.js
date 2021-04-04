const initialState = {
    popularGames: [],
    newGames: [],
    upComingGames: []
}

const gamesReducers = (state =initialState, action) => {
    switch(action.type){
        case 'FETCH_GAMES':
            return {...state, 
                popularGames: action.payload.popularGames,
                newGames: action.payload.newGames,
                upComingGames: action.payload.upComingGames
            };
        default:
            return {...state};
    }
};

export default gamesReducers;