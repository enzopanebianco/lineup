import styled from 'styled-components';

type ImgProps = {
    bright: boolean;
}

export const Container = styled.div`
    background: ${p => p.theme.sidebar};
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
`;

export const Image = styled.img<ImgProps>`
    margin-top: 30px;
    max-height: 30px;
    max-width: 50px;
    cursor: pointer;
    filter: ${p=>p.bright&&'brightness(2)'};
`;
