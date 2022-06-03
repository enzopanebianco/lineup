import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  color: ${p=>p.theme.text_disabled};
  div{
      display: flex;
      gap: 5px;
      align-items: center;
  }
  input[type="color"]{
     
      width: 35px;
      height: 35px;
      border:none;
      display: block;
      -webkit-appearance: none;
      background: transparent;
      -moz-appearance: none;
      appearance: none;
    ::-webkit-color-swatch{
        border-radius: 15px;
        border:1px solid white
    }
  }
  input[type="text"]{
    background: transparent;
    border: 0;
    outline:none;
    /* font-size: 15px; */
    color:white;
    border-bottom:1px solid ${p=>p.theme.text_disabled};
    :focus{
      border-bottom:1px solid ${p=>p.theme.text}
    }
  }
`;
