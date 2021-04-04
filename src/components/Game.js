import React from 'react'
//Styles and animations
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Redux
import {useDispatch} from 'react-redux';
import {loadGameDetails} from '../actions/detailAction';
import {Link} from 'react-router-dom';


export default function Game({name, release, image, id}) {
    const dispatch = useDispatch()
    const loadGameDetailHandler = () =>{
        document.body.style.overflow = 'hidden';
        dispatch(loadGameDetails(id));
    }

    return (
        <StyledGame onClick={loadGameDetailHandler}>
        <Link to={`/games/${id}`}>
           <h3>{name}</h3>
           <p>{release}</p>
           <img src={image} alt={name}/>
        </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
    cursor: pointer;
`;