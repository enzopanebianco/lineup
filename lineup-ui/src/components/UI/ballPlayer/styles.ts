import styled from 'styled-components';

type BallPlayerProps = {
    primary_color:string;
    secondary_color:string;
}

export const Container = styled.div<BallPlayerProps>`
    background: ${p=>p.primary_color};
    border: ${p=>p.secondary_color} 6px solid;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: ${p=>p.theme.box_shadow};
`;
