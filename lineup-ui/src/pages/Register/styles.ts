import styled from 'styled-components';

type BtnProps = {
    color:string;
}

export const Container = styled.div`
    background: ${p=>p.theme.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const BoxContent = styled.div`
    background: #fefefe;
    width: 35%;
    min-height: 350px;
    padding: 5px 10px;
    border-radius: 10px;
    box-shadow: ${p=>p.theme.box_shadow};
`;
export const BoxHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    p{
        justify-self: flex-end;
        color: ${p=>p.theme.bar};
        margin-right: 10px;
        cursor: pointer;
    }
`;
export const Title = styled.h1`
    color: ${p=>p.theme.btn_dark};
    text-align: center ;
    margin-left: 100px;
`;
export const Form = styled.form`
    display: flex;
    font-family: segoe ui;
    flex-direction: column;
    align-items: center;
    input{
        font-family: segoe ui;

    }
`;
export const FormHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    i{
    
        color: ${p=>p.theme.squares};
        cursor: pointer;
        margin-right: 5px;
    }
`;

export const Field = styled.div`
    width: 80%;
    display: flex;
    margin-bottom: 15px;
    flex-direction: column;
    gap: 5px;
`;
export const LabelText = styled.label`
    color: ${p=>p.theme.squares};
    transform: translateX(-5px);
`;
export const BtnAction = styled.button<BtnProps>`
    background:${p=>p.color};
    color: white;
    padding: 4px 10px;
    border:0;
 
    font-size: 16px;
    margin-top: 5px;
    min-width: 80%;
    cursor: pointer;
    border-radius: 5px;
    :hover{
        filter: brightness(1.2);
        transition: 0.2s ease-in-out;
    }
    :disabled{
        background: #ccc;
        cursor: default;
        :hover{
            filter: brightness(1);
        transition: 0.2s ease-in-out;
        }
    }
`;

export const OtherOption = styled.div`
    color: ${p=>p.theme.text_disabled};
    margin: -10px;
    font-weight:300;
    font-family: segoe ui;
    display: flex;
    align-items: center;
    gap: 10px;
    span{
        height: 1px;
        width: 50px;
        background-color: ${p=>p.theme.text_disabled};
    }
    p{
        transform: translateY(-2px);
        font-family: segoe ui;
    }
`;
export const GoogleBtn = styled.button`
    background: #F14336;
    color: white;
    display: flex;
    align-items: center;
    width: 60%;
    font-family: segoe ui;
    font-weight: 500;
    font-size: 16px;
    border-radius: 5px;
    justify-content: center;
    margin-bottom: 15px;
    gap: 15px;
    padding: 5px 10px;
    border:0;
    cursor: pointer;
    :hover{
        filter: brightness(1.2);
        transition: 0.2s ease-in-out;
    }
`;