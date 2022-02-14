import { Position } from "../constants/positions";

const players:Player[] = [ 
    {
        id:Math.random(),
        position:'GOL',
        name:'Jõao Paulo'
    },
    {
        id:Math.random(),
        position:'LD',
        name:'Madson'
    },
    {
        id:Math.random(),
        position:'ZAG',
        name:'Kaiky'
    },
    {
        id:Math.random(),
        position:'ZAG',
        name:'Bauermann'
    },
    {
        id:Math.random(),
        position:'LE',
        name:'F.Jonathan'
    },
    {
        id:Math.random(),
        position:'VOL',
        name:'Camacho'
    },
    {
        id:Math.random(),
        position:'VOL',
        name:'Zanocelo'
    },
    {
        id:Math.random(),
        position:'MEI',
        name:'R.Goulart'
    },
    {
        id:Math.random(),
        position:'PE',
        name:'Lucas Braga'
    },
    {
        
        id:Math.random(),
        position:'ATA',
        name:'M.Leonardo'
    },
    {
        id:Math.random(),
        position:'PD',
        name:'Angelo'
    },
]

export type Player = {
    id:number;
    name:string,
    position:Position
}
export default players;