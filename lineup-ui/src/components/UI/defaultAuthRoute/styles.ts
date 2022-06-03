import styled from 'styled-components';

export const AuthContainer = styled.div`
  display:grid;
  background:${p=>p.theme.primary};
  grid-template-columns:80px 11fr;
  grid-auto-flow: column;
  height:100vh;
  section{
    display: flex;
    flex-direction:column;
    background: #181C32;
    flex-wrap: wrap;
  };
`;
