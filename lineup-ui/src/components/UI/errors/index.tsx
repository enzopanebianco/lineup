import React from 'react';
import { ErrString } from './styles';

type TypeError = {
  text:string;
}

function Errors({text}:TypeError) {
  return(
      <ErrString>
          {text}
      </ErrString>
  );
}

export default Errors;