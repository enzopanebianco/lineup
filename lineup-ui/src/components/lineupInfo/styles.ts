import styled from 'styled-components';
import { PositionProps } from '../../@types/positions';



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
    select{
        align-self: flex-start;
        font-weight: 400;
        font-size: 20px;
        background: ${p=>p.theme.primary};
        color: white;
        border: 0;
        margin-left: 20px;
        border-radius: 10px;
        box-shadow: ${p=>p.theme.box_shadow};
    }
    input{
        font-size: 25px;
        padding: 0px 5px;
        color: white;
        width: 100%;
        margin-top: 10px;
        border-radius:10px;
        background: transparent;
        border: 1px solid ${p=>p.theme.text_disabled};
        box-shadow: ${p=>p.theme.box_shadow};
        margin-bottom: 20px;
    }
`;
export const PlayersInfo = styled.div`
    display: grid;
    grid-template-columns:repeat(3,200px);
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

export const BtnAdd = styled.button`
    background: ${p=>p.theme.primary};
    width: 50%;
    border: 0;
    padding: 0px;
    display: flex;
    gap: 2px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    box-shadow: ${p=>p.theme.box_shadow};
    color: ${p=>p.theme.text};
`;