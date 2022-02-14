import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${p=>p.theme.primary};
  color: white;
  border-bottom: 1px solid #120C32;
  display: flex;
  align-items: center;
  justify-content: end;
  img{
    margin-right: 20px;
    max-width: 120px;
  }
`;
 