import React, { ReactNode, useCallback, useRef } from 'react';
import lineupSVG from '../../assets/images/lineup.svg';
import { useField } from '../../contexts/FieldContext';
import Player from '../player';
import { Container } from './styles';


function Field() {
    const { teamPlayers, phaseGame, positionPlayers } = useField();
    const fieldRef = useRef<HTMLImageElement>(lineupSVG);

    const renderPlayers = useCallback(() =>

        teamPlayers.map(player => {
            const currentPosition = positionPlayers[phaseGame]
                .find(playerPosition => playerPosition.playerId === player.id);
            
            return (
                <Player
                    ref={fieldRef}
                    x={currentPosition?.x || 0}
                    y={currentPosition?.y|| 0}
                    id={player.id}
                    key={player.id}
                    name={player.name} />
            )
        }
        ),[teamPlayers, positionPlayers, phaseGame])

    return (
        <>
            <Container img={lineupSVG} ref={fieldRef}>
                {renderPlayers()}
            </Container>
        </>
    );
}

export default Field;