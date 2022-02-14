import React, { ReactNode, useCallback } from 'react';
import lineupSVG from '../../assets/images/lineup.svg';
import { useField } from '../../contexts/FieldContext';
import players from '../../data/players';
import Player from '../player';
import { Container } from './styles';

type Props={
    children:ReactNode
}
function Field({children}:Props) {
    const {teamPlayers} = useField();

    const renderPlayers = useCallback(() =>
        teamPlayers.map(player=>
         <Player  key={player.id}  name={player.name} />
        ),[teamPlayers])
    

    return (
        <>
            <Container img={lineupSVG}>
                {/* <img src={lineupSVG} alt="campo de futebol" ></img> */}
               {renderPlayers()}
            </Container>
        </>
    );
}

export default Field;