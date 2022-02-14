import styled from 'styled-components';

export const Container = styled.div`
    background: ${p=>p.theme.sidebar};
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    img{
        margin-top: 30px;
        max-height: 30px;
        max-width: 50px;
        cursor: pointer;
    }
`;
