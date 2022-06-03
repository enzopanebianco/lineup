import React from 'react';

import { Container } from './styles';

type BallPlayerProps = {
    primary_color:string;
    secondary_color:string;
}

function BallPlayer ({primary_color,secondary_color}:BallPlayerProps){
  return(
      <Container primary_color={primary_color} secondary_color={secondary_color}/>
  );
}

export default BallPlayer;