import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import players, { Player } from "../data/players";
import api from "../services/api";

type FieldContextProps = {
    teamPlayers: Player[],
    setTeamPlayers:Dispatch<SetStateAction<Player[]>>,
    teamColors:TeamColor,
    setTeamColors:Dispatch<SetStateAction<TeamColor>>,
}

type FieldProviderProps = {
    children: ReactNode
}

type TeamColor = {
    primaryColor:string;
    secundaryColor:string;
}

export const FieldContext = createContext({} as FieldContextProps);

export function FieldContextProvider({ children }: FieldProviderProps) {
    const [teamPlayers, setTeamPlayers] = useState(players);
    const [teamColors,setTeamColors] = useState<TeamColor>({
        primaryColor:'white',
        secundaryColor:'black'
    });

    // useEffect(()=>{
    //     async function test(){
    //     const {data} = await api.get('/listprice/2322?sku=MLB9299');

    //     console.log(data)
    //     }
    //     test()
    // },[])

    return (
        <FieldContext.Provider value={{ 
            teamColors,teamPlayers,setTeamPlayers,
            setTeamColors
            }}>
            {children}
        </FieldContext.Provider>
    )
}

export function useField(){
    const context = useContext(FieldContext);

    return context;
}