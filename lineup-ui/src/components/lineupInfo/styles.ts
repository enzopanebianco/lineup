import styled from 'styled-components';
import { PositionProps } from '../../constants/positions';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;

`;

export const InfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${p=>p.theme.text};
    h2{
        align-self:center;
        font-weight: 600;
        font-size: 35px;
    }
    p{
        align-self: flex-start;
        font-weight: 400;
        font-size: 20px;
    }
`;
export const PlayersInfo = styled.div`
    display: grid;
    grid-template-columns:repeat(3,180px);
    grid-template-rows:repeat(4,35px);
    grid-gap: 5px;
`;
export const PlayerItem = styled.div<PositionProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    color:${p=>p.theme.text};
    input{
        font-size: 18px;
        background: transparent;
        color:${p=>p.theme.text};
        padding: 0;
        border: 0;
        width: 100%;
        word-break: break-all;
        :focus{
            outline: none;
            border-bottom:2px white solid;
        }
    }
    select{
        background: ${p=>p.theme.primary};
        color: white;
        border: 0;
        color:${p=>p.theme[p.position]};
        font-weight: bolder;
        box-shadow: ${p=>p.theme.box_shadow};
        font-size: 12pt;
    }
  
`;
export const Position = styled.span<PositionProps>`
    color:${p=>p.theme[p.position]};
`;
export const OptionPosition = styled.option<PositionProps>`
    color:${p=>p.theme[p.position]};
 
`;

export const Manager = styled.div`
    display: flex;
    gap: 10px;
    align-self: flex-end;
    color: ${p=>p.theme.text};
    align-items:center;
    margin-top: 20px;
    strong{
        font-size: 20px;
    }
    p{
        font-size: 18px;
        
    }
`;