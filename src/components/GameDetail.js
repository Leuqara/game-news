import React from 'react';
import {useSelector } from 'react-redux';

//importing styles and motion library
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

export default function GameDetail() {

    const {game, screenshots} = useSelector(state => state.details);
    const history = useHistory();
    const existHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            history.push('/')
         }
    }

    return (
        <CardShadow onClick={existHandler} className="shadow">
            <Detail>
                <Stats>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>{game.rating}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {
                                game.platforms.map((data) =>(<p key={data.platform.id}>{data.platform.name}</p>)) 
                            }
                        </Platforms>
                    </Info>
                </Stats>
                <div className="media">
                    <img src={game.background_image} alt={game.background_image}/>
                </div>
                <div className="description_raw">
                    <p>{game.description_raw}</p>
                </div>
                <div className="gallery">
                    {
                        screenshots.map((screenshot) => (
                            <img src={screenshot.image} alt={screenshot.image} key ={screenshot.id}/>
                        ))
                    }
                </div>
            </Detail>
        </CardShadow>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top:0;
    left:0;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    color: black;
    left: 10%;
    position: absolute;
    img{
        width: 100%
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin: 3rem;
    }
`;