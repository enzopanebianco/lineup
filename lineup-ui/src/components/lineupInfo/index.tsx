import React, { memo, useCallback } from 'react';
import { FORMATIONS } from '../../constants/formations';
import { POSITION_COLORS, Position, POSITIONS } from '../../constants/positions';
import { useField } from '../../contexts/FieldContext';

import * as Css from './styles';

const LineupInfo: React.FC = () => {

    const { teamPlayers, setTeamPlayers } = useField();

    function getPositionColor(position: Position): any {
        return POSITION_COLORS[position];
    }

    const changePlayerPosition = (id: number, newPosition: any) => {
        const indexPlayer = teamPlayers.findIndex(player => player.id === id);
        if (indexPlayer > -1) {
            teamPlayers[indexPlayer].position = newPosition
            setTeamPlayers([
                ...teamPlayers,
            ])
        }
    }

    const changePlayerName = useCallback((id: number, newName: string) => {
        const indexPlayer = teamPlayers.findIndex(player => player.id === id);
        if (indexPlayer > -1) {
            teamPlayers[indexPlayer].name = newName
            setTeamPlayers([
                ...teamPlayers,
            ])
        }
    }, [teamPlayers])


    return (
        <>
            <Css.Container>
                <Css.InfoHeader>
                    <input type="text" />
                    <select>
                        <option value="">----</option>
                        {FORMATIONS.map(formation=>
                        <option value={formation}>{formation}</option>    
                        )}
                    </select>
                </Css.InfoHeader>
                <Css.PlayersInfo>

                    {teamPlayers.map(player =>
                        <Css.PlayerItem position={getPositionColor(player.position)} key={player.id}>
                            <select onChange={(e)=>changePlayerPosition(player.id,e.target.value)}>
                                <option value="">--</option>
                                {POSITIONS.reverse().map(position =>
                                    <Css.OptionPosition
                                        position={getPositionColor(position)}
                                        selected={position===player.position}
                                        value={position}>
                                        {position}
                                    </Css.OptionPosition>
                                )}
                            </select>

                            <span>-</span>
                            <input type="text"
                                onChange={(e) =>
                                    changePlayerName(player.id, e.target.value)
                                }
                                defaultValue={player.name}
                            />

                        </Css.PlayerItem>
                    )}
                </Css.PlayersInfo>
                <Css.Manager>
                    <strong>Treinador(a)</strong>
                    <strong>-</strong>
                    <p>Enzo Romano</p>
                </Css.Manager>
            </Css.Container>
        </>
    );
}

export default memo(LineupInfo);
