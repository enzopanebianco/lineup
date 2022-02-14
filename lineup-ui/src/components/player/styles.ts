import styled from 'styled-components';

type PlayerProps = {
    primary_color:string;
    secondary_color:string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position:absolute;
    cursor:pointer;
    gap: 3px;
    span{
        color: ${p=>p.theme.text};
        text-shadow: ${p=>p.theme.box_shadow};
        font-size: 11px;
        font-weight: 600;
    }
`;
export const BallPlayer = styled.div<PlayerProps>`
    background: ${p=>p.primary_color};
    border: ${p=>p.secondary_color} 6px solid;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: ${p=>p.theme.box_shadow};
`;
