import Input from '../../components/UI/input';
import logo from '../../assets/images/logo.svg'
import * as Css from './styles';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <Css.Container>
                <Css.BoxContent>
                    <Css.BoxHead>
                        <Css.Title>Login</Css.Title>
                        <Link to="/cadastro">
                            <p> Ir para Cadastro</p>
                        </Link>
                    </Css.BoxHead>
                    <Css.Form>
                        <Css.LoginField>
                            <Css.LabelText>Email</Css.LabelText>
                            <Input type="email" />
                        </Css.LoginField>
                        <Css.LoginField>
                            <Css.LabelText>Senha</Css.LabelText>
                            <Input type="password" />
                            <a href='#'>Esqueci minha senha</a>
                        </Css.LoginField>
                        <Css.BtnAction color='#253BFF'>Entrar</Css.BtnAction>
                    </Css.Form>
                    <Css.LogoImg src={logo} alt="logo img" />
                </Css.BoxContent>
            </Css.Container>
        </>
    );
}

export default Login;