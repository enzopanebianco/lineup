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
    align-items: center;
    gap: 3px;
    span{
        color: ${p=>p.theme.text};
        text-shadow: ${p=>p.theme.box_shadow};
        font-size: 11px;
        font-weight: 600;
    
    }
`;
