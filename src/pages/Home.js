import React, {useEffect} from 'react'
//Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gameActions';
//Styles and animations
import styled from 'styled-components';
import {motion} from 'framer-motion';
//components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
import {useLocation} from 'react-router-dom';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadGames());
    },[dispatch])

    // Get data from State
    const {popularGames, newGames, upComingGames}  = useSelector((state) => state.games);
    const {game} = useSelector(state => state.details)

    const location = useLocation()
    console.log(location);
    const gameID = location.pathname.split('/')[2];

    return (   
        <GameList>
            {game.length !== 0 && gameID !==undefined && <GameDetail/>}
            <h2>Upcoming Games</h2>
            <Games>
                {
                    newGames.map(game => (
                        <Game name={game.name} release={game.released} image = {game.background_image} id = {game.id} key={game.id}/>
                    ))
                }
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {
                    popularGames.map(game => (
                        <Game name={game.name} release={game.released} image = {game.background_image} id = {game.id} key={game.id}/>
                    ))
                }
            </Games>
            <h2>New Released Games</h2>
            <Games>
                {
                    upComingGames.map(game => (
                        <Game name={game.name} release={game.released} image = {game.background_image} id = {game.id} key={game.id}/>
                    ))
                }
            </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
