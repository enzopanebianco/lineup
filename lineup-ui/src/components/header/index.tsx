import React from 'react';

import { Container } from './styles';
import logoSVG from '../../assets/images/logo.svg'

function Header() {
    return (
        <Container>
           <img src={logoSVG} alt="logo" />
        </Container>
    )
}

export default Header;