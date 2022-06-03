export type Position =
    'PE' |
    'ATA' |
    'PD' |
    'SA' |
    'MEI' |
    'MC' |
    'VOL' |
    'LD' |
    'ZAG' |
    'LE' |
    'ADE' |
    'ADD' |
    'GOL'

export type PositionProps = {
    position: 'goalkeeper' | 'defender' | 'midfielder' | 'striker'
}

export type PositionsOnField = {
    x:number;
    y:number;
    playerId:number;
} 
export type PositionPlayers = {
    attack: PositionsOnField[],
    defense:PositionsOnField[]
}


export type PhaseGame = "attack" | "defense";


