import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${p=>p.theme.text_disabled};
  div{
      display: flex;
      gap: 10px;
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
  
`;
