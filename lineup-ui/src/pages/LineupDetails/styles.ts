import styled from 'styled-components';

type Box={
  padding:string;
}

export const Container = styled.div`
  display:grid;
  background:coral;
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
export const LineupMain = styled.div`
  display: flex;
  width:90%;
  
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 75px;
  margin: 50px auto;
  article{
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;


export const LineupBox = styled.div<Box>`
  background: ${p=>p.theme.squares};
  padding: ${p=>p.padding};
  border-radius: 30px;
  box-shadow: ${p=>p.theme.box_shadow};
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  gap: 10px;
  span{
    font-size: 40px;
    color: ${p=>p.theme.bar};
    font-weight: 600;
  }
`;