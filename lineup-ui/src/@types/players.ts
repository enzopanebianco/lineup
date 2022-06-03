import { Position } from "./positions";

export type Player = {
    id: number;
    name: string,
    position: Position;
    x: number;
    y: number
}

export const players:Player[] = [
    {
        name:'Enzo',
        position: 'ATA',
        x:0,
        y:0,
        id:0.1
    }
]