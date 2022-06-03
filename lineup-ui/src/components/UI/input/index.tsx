import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import * as Css from './styles';

function Input ({...props}:InputHTMLAttributes<any>|UseFormRegisterReturn){

  return(
      <Css.InputDefault {...props} />
  );
}

export default Input;