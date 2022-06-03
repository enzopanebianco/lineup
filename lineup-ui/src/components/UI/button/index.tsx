import React, { HTMLProps, SVGProps } from 'react';
import { BtnContainer } from './styles';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    color: string;
    icon?: string;
    text: string;
    active: boolean;
}

function Button({ color, icon, text, disabled, onClick, active }: ButtonProps) {
    return (
        <BtnContainer active={active} onClick={!active ? onClick : () => { }} disabled={disabled} color={color}>
            <p>{text}</p>
            {icon &&
                <img src={icon} alt="icon" />
            }
        </BtnContainer>
    );
}

export default Button;