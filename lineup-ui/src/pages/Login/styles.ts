import styled from 'styled-components';

type BtnProps = {
    color:string;
}

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${p=>p.theme.primary};
`;

export const BoxContent = styled.div`
    background: #fefefe;
    box-shadow: ${p=>p.theme.box_shadow};
    border-radius: 10px;
    min-width: 35%;
    padding: 5px 10px;
    min-height: 350px;
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
    margin-left: 200px;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    margin: 0 auto;
    align-items: center;
    a{
        font-size: 10pt;
        color: ${p=>p.theme.defender};
        margin-bottom: 5px;
    }
`;
export const LoginField = styled.div`
    width: 90%;
    display: flex;
    margin-bottom: 20px;
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
    margin-bottom: 10px;
    font-size: 16px;
    min-width: 90%;
    cursor: pointer;
    border-radius: 5px;
    :hover{
        filter: brightness(1.2);
        transition: 0.2s ease-in-out;
    }
`;

export const LogoImg = styled.img`
    max-width: 15%;
    margin: 5px auto;
    display: flex;

`;