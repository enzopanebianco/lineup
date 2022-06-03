import styled from 'styled-components';

type BtnPropsStyle={
    active:boolean;
}

export const BtnContainer = styled.button<BtnPropsStyle>`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${p=>p.active?p.theme.text:p.theme.text_disabled};
    background: ${p=>p.active?p.color:p.theme.squares};
    font-weight: 600;
    font-size: 20px;
    max-height: 42px;
    box-shadow: ${p=>p.theme.box_shadow};
    border:0;
    padding: 2px 12px;
    border-radius: 10px;
    :hover{
        filter:${p=>!p.active&&'brightness(1.2)'};
        transition:0.3s ease-in opacity;
    }
    cursor: pointer;
    img{
       filter:${p=>!p.active&&'brightness(0.7)'}
    }
`;
