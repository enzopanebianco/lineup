export type User = {
    id:number;
    name:string;
    password:string,
    email:string,
    createdAt:Date,
    updatedAt:Date,
    about?:string,
    avatar:string,
    linkedin?:string,
    instagram?:string,
    twitter?:string,
    userTypeId:number
}

export type Lineup = {
    id:number,
    userId:number,
    title:string,
    description:string,
    primaryColor:string,
    secondaryColor:string,
    createdAt:Date,
    updatedAt:Date,
    team?:string,
    formation:string
}

export type PlayerLineup = {
    id:number,
    name:string,
    lineup_id:number,
    phaseGame:string,
    positionX:number,
    positionY:number,
    positionField:string
}

export type UserType = {
    id:number;
    type:string;
}
