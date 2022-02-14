import React from 'react';
import { Container } from './styles';
import clipboardSVG from '../../assets/images/clipboard.svg';
import bootsSVG from '../../assets/images/boots.svg';
import fieldSVG from '../../assets/images/field.svg';
function Sidebar(){
  return(
    <>
      <Container>
        <img src={fieldSVG} alt="prancheta" />
        <img src={clipboardSVG} alt="prancheta" />
        <img src={bootsSVG} alt="prancheta" />

      </Container>
    </>
  );
}

export default Sidebar;