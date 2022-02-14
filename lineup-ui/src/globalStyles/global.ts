import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
    margin:0;
    padding:0;
    box-sizing:border-box;
  
}
input,body,button,p,select{
    font-family:'Poppins',sans-serif;
}

`

export {GlobalStyle};