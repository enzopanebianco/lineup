import styled from 'styled-components';


export const Container = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 50px;

`;

export const LineupCard = styled.div`
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    margin-bottom: 50px;
    background: ${p=>p.theme.squares};
    box-shadow: ${p=>p.theme.box_shadow};
    align-items: center;
    img{

        max-width: 180px;
    }
`;

export const LineupCardHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    flex-wrap: wrap;
    span{
        margin-top: 5px;
        align-self: flex-end;
        color: ${p=>p.theme.btn_attack};
    }
`;

export const LineupTitle = styled.strong`
    font-weight: 400;
    font-size: 12pt;
    color: ${p=>p.theme.text};
    margin-bottom: 5px;
`;

export const LineupCardBody = styled.div`
    background: url('/img/lineup.svg');
    cursor: pointer;
    background-size:cover;
    width: 100%;
    min-height: 100%;
    margin-bottom: 5px;
    box-shadow: 0px -90px 10px rgba(0,0,0,0.6) inset;
    display: flex;
    flex-direction: column;
    border-radius: 0px 0px 10px 10px;
    justify-content: space-around;
    color: ${p=>p.theme.text};
    p{
        color: ${p=>p.theme.btn_defender};
        margin-left: 10px;
        font-weight: 400;
    }
    span{
        justify-content: flex-end;
        display: flex;
        color: ${p=>p.theme.text_disabled};

        margin-right: 10px;
    }
    strong{
        font-weight: bolder;
        color: ${p=>p.theme.text};
        font-size: 14pt;

    }
    :hover{
        filter: brightness(1.1);
        transition: 0.3s ease-in;
    }
    
`;

export const LineupCardPlayers = styled.div<any>`
    display: flex;
    justify-content: ${p=>p.position.justifyContent};
    div:nth-child(1){
       transform: ${p=>p.position.child1};
    }
    div:nth-child(2){
       transform: ${p=>p.position.child2};
    }
    div:nth-child(3){
       transform: ${p=>p.position.child3};
    }
`;

export const LineupCardFooter = styled.div`
    display: flex;
    font-size: 12pt;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
    strong{
        font-size: 12pt;
        color:${p=>p.theme.text};
        font-style: italic;
        :hover{
            color: #ccc;
        }
    }

`;