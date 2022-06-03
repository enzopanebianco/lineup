import { useState } from 'react';
import * as Css from './styles';
import { FieldObj } from '../../@types/fields';
import Moment from 'moment'
import BallPlayer from '../UI/ballPlayer';

const data: FieldObj[] = [
    {
        id: 1,
        title: 'Santos x Corinthians',
        formation: '4-3-3',
        created_at: new Date(Date.now()),
        team: 'Santos',
        username:'Enzo222',
        team_colors: {
            primary: "#fff",
            secondary: "#000"
        }
    },
    {
        id: 2,
        title: 'Santos x Corinthians',
        formation: '4-4-2',
        created_at: new Date(Date.now()),
        team: 'Santos',
        username:'Enzo222',
        team_colors: {
            primary: "#ff0909",
            secondary: "#3700ff"
        }
    },
    {
        id: 3,
        title: 'Santos x Corinthians',
        formation: '4-3-3',
        created_at: new Date(Date.now()),
        team: 'Santos',
        username:'Enzo222',
        team_colors: {
            primary: "#fff",
            secondary: "#000"
        }
    },
    {
        id: 4,
        title: 'Santos x Corinthians',
        formation: '4-5-1',
        created_at: new Date(Date.now()),
        team: 'Santos',
        username:'Enzo222',
        team_colors: {
            primary: "#fff",
            secondary: "#000"
        }
    },
    {
        id: 5,
        title: 'Santos x Corinthians',
        formation: '4-3-3',
        created_at: new Date(Date.now()),
        team: 'Santos',
        username:'Enzo222',
        team_colors: {
            primary: "#fff",
            secondary: "#000"
        }
    },
    {
        id: 6,
        title: 'Santos x Corinthians',
        formation: '4-3-3',
        username:'Enzo222',
        created_at: new Date(Date.now()),
        team: 'Santos',
        team_colors: {
            primary: "#fff",
            secondary: "#000"
        }
    },
    {
        id: 7,
        title: 'Santos x Corinthians',
        formation: '4-3-3',
        username:'Enzo222',
        created_at: new Date(Date.now()),
        team: 'Santos',
        team_colors: {
            primary: "#fff",
            secondary: "#000"
        }
    },
    {
        id: 8,
        title: 'Santos x Corinthians',
        formation: '4-3-3',
        username:'Enzo222',
        created_at: new Date(Date.now()),
        team: 'Santos',
        team_colors: {
            primary: "#fff",
            secondary: "#000"
        }
    },
]

function LineupList() {
    const [lineups, setLineups] = useState(data);
    const formatDate = (dt: Date) => Moment(dt).format("DD/MM/YYYY");

    const formationStyle = {
        '1':{
                justifyContent: "space-around",
                child1: "translateY(50px) translateX(35px)",
                child3: "translateY(50px) translateX(-35px)",
        },
        '2':{
            justifyContent: "center",
            child1: "translateY(50px) translateX(35px)",
            child2:"translateX(-40px)",
            child3: "translateY(0px) translateX(20px)",
        },
        '3': {
            justifyContent: "space-around",
            child1: "translateY(20px) ",
            child3: "translateY(20px)",
        }
    }

    const strikersNumber = (formation:string) =>  formation.slice(4) ;
  

    return (
        <>
            <Css.Container>
                {lineups.map(lineup =>
                    <Css.LineupCard key={lineup.id} >
                        <Css.LineupCardHeader>
                            <span>{lineup.formation}</span>
                            <Css.LineupTitle> {lineup.title}</Css.LineupTitle>
                        </Css.LineupCardHeader>
                        <Css.LineupCardBody>
                            
                            <Css.LineupCardPlayers 
                            position={(formationStyle as any)[strikersNumber(lineup.formation)]}>
                                <BallPlayer
                                    primary_color={lineup.team_colors.primary}
                                    secondary_color={lineup.team_colors.secondary} />
                                <BallPlayer
                                    primary_color={lineup.team_colors.primary}
                                    secondary_color={lineup.team_colors.secondary} />
                                <BallPlayer
                                    primary_color={lineup.team_colors.primary}
                                    secondary_color={lineup.team_colors.secondary} />
                            </Css.LineupCardPlayers>
                            <div>
                                <p>Time <strong>{lineup.team}</strong></p>
                                <Css.LineupCardFooter>
                                    <strong>@{lineup.username}</strong>
                                    <span>{formatDate(lineup.created_at)}</span>
                                </Css.LineupCardFooter>
                            </div>
                        </Css.LineupCardBody>
                    </Css.LineupCard>
                )}
            </Css.Container>
        </>
    );
}

export default LineupList;