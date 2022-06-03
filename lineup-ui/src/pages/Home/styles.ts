import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 25px auto;
`;

export const HomeHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    color: ${p=>p.theme.text};
    text-shadow: ${p=>p.theme.box_shadow};
`;

export const HomeFilters = styled.div`
    display: flex;
    gap: 40px;
`;
export const Input = styled.input`
    background: ${p=>p.theme.sidebar};
    padding: 3px 5px;
    outline: none;
    font-weight: 400;
    font-size: 11pt;
    border-radius: 5px;
    color: ${p=>p.theme.text};
    min-width: 300px;
    border: 1px solid ${p=>p.theme.squares};
`;

export const Select = styled.select`
    background: ${p=>p.theme.sidebar};
    padding: 3px 5px;
    outline: none;
    font-weight: 400;
    font-size: 13pt;
    border-radius: 5px;
    color: ${p=>p.theme.text};
    border: 1px solid ${p=>p.theme.squares};
`;