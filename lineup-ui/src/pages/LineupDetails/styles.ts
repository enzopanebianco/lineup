import styled from 'styled-components';

type Box={
  padding:string;
  expandField?:boolean
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
  width:95%;
  
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  
  margin: 25px auto;
  article{
    display: flex;
    flex-direction: column;
    gap: 25px;
    section{
      display: flex;
      flex-direction: row;
      gap: 25px;
      flex-wrap: nowrap;
      div:nth-child(1){
        width: 60%;
       
      }
      div:nth-child(2){
        width: 30%;
        display: flex;
        
        flex-direction: column;
       
      }
    }

  }
  article:nth-child(2){
   
    width: 55%;
  }
`;


export const LineupBox = styled.div<Box>`
  background: ${p=>p.theme.squares};
  padding: ${p=>p.padding};
  width:${p=>p.expandField?'100%':'initial'};
  border-radius: 30px;
  box-shadow: ${p=>p.theme.box_shadow};
  i{
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 5px;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
  span{
    font-size: 40px;
    color: ${p=>p.theme.bar};
    font-weight: 600;
  }
`;

export const ButtonInfoPositions = styled.button`
  margin-left: 10px;
  background: ${p=>p.theme.btn_dark};
  padding: 5px 5px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  color: ${p=>p.theme.text};
  cursor: pointer;
  border:0;
  box-shadow: ${p=>p.theme.box_shadow};
`;

export const TextareaDescription = styled.textarea`
  width: 100%;
  background: transparent;
  border: 0;
  margin-bottom: 10px;
  resize: none;
  padding: 5px;
  color:${p=>p.theme.text};
  display: flex;
  border-radius: 10px;
  outline: none;
  height: 100%;
`;

export const SaveOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div:nth-child(1){
    width: 80%;
  }
  button{
    cursor: pointer;
    align-self: flex-end;
    padding: 5px 10px;
    border: 0;
    border-radius: 10px;
    box-shadow: ${p=>p.theme.box_shadow};
    font-size: 18px;
    color: white;
    background: #0062ff;
  }
`;