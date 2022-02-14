const POSITION_COLORS = {
    'PE': 'striker',
    'ATA': 'striker',
    'PD': 'striker',
    'SA': 'striker',
    'MEI': 'midfielder',
    'MC': 'midfielder',
    'VOL': 'midfielder',
    'LD': 'defender',
    'ZAG': 'defender',
    'LE': 'defender',
    'ADE': 'defender',
    'ADD': 'defender',
    'GOL': 'goalkeeper'
}

const POSITIONS:Position[] = [
    'PE' ,
    'ATA' ,
    'PD' ,
    'SA' ,
    'MEI' ,
    'MC' ,
    'VOL' ,
    'LD' ,
    'ZAG' ,
    'LE' ,
    'ADE' ,
    'ADD' ,
    'GOL'
   
]


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
export { POSITION_COLORS,POSITIONS }