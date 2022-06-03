import {
    createContext, Dispatch, ReactNode,
    SetStateAction, useCallback, useContext, useState
} from "react";

import { PhaseGame, PositionPlayers, PositionsOnField } from "../@types/positions";
import { Player, players } from "../@types/players";

type FieldContextProps = {
    teamPlayers: Player[],
    setTeamPlayers: Dispatch<SetStateAction<Player[]>>,
    setPhaseGame: Dispatch<SetStateAction<PhaseGame>>,
    teamColors: TeamColor,
    setTeamColors: Dispatch<SetStateAction<TeamColor>>,
    changePositionOnPhaseGame: (phase: PhaseGame) => void,
    handlePositionPlayers: (newArrPositions: PositionsOnField) => void,
    phaseGame: PhaseGame,
    positionPlayers: PositionPlayers,
}

type FieldProviderProps = {
    children: ReactNode
}

type TeamColor = {
    primaryColor: string;
    secundaryColor: string;
}

export const FieldContext = createContext({} as FieldContextProps);

export function FieldContextProvider({ children }: FieldProviderProps) {
    const [teamPlayers, setTeamPlayers] = useState<Player[]>(players);
    const [phaseGame, setPhaseGame] = useState<PhaseGame>('attack');
    const [positionPlayers, setPositionPlayers] = useState<PositionPlayers>({
        attack: [{ x: 0, y: 0, playerId: 0.1 }],
        defense: [{ x: 0, y: 0, playerId: 0.1 }],

    });
    const [teamColors, setTeamColors] = useState<TeamColor>({
        primaryColor: 'white',
        secundaryColor: 'black'
    });

    const changePositionOnPhaseGame = useCallback((phase: PhaseGame) => {
        setPhaseGame(phase)
        if (positionPlayers[phase].length < 1) {
            teamPlayers.map(player => {
                player.x = 0;
                player.y = 0;
            })
        }
        positionPlayers[phase].forEach(position =>
            teamPlayers?.forEach(player => {
                if (player.id === position.playerId) {
                    player.x = position.x;
                    player.y = position.y
                }
            })
            )
            
            setTeamPlayers([...teamPlayers])
        }, [positionPlayers])
    function handlePositionPlayers(newPosition: PositionsOnField) {
      
        if (positionPlayers) {
            const indexPlayer =
                positionPlayers[phaseGame]
                    .findIndex(player => player.playerId === newPosition.playerId);
            if (indexPlayer === -1)
                positionPlayers[phaseGame].push(newPosition);
            else
                positionPlayers[phaseGame][indexPlayer] = {
                    playerId: newPosition.playerId,
                    x: newPosition.x,
                    y: newPosition.y
                }

            setPositionPlayers(positionPlayers)
        }
    }

    return (
        <FieldContext.Provider value={{
            teamColors, teamPlayers, setTeamPlayers,
            setTeamColors,
            changePositionOnPhaseGame,
            handlePositionPlayers,
            setPhaseGame,
            phaseGame,
            positionPlayers
        }}>
            {children}
        </FieldContext.Provider>
    )
}

export function useField() {
    const context = useContext(FieldContext);

    return context;
}