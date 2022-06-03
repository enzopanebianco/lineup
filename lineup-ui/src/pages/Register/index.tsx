import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import Errors from '../../components/UI/errors';
import * as Css from './styles';
import { FaGoogle } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

type RegisterInput = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const schema = yup.object().shape({
    name: yup.string().required().min(6),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup.string().required().oneOf(
        [yup.ref("password")]
    ),
}).required()

function Register() {
    const [typePassword, setTypePassword] = useState('password');
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({
        resolver: yupResolver(schema)
    })

    const registerUser = (newUser: RegisterInput) => {
        console.log(newUser)
    }

    return (
        <Css.Container>
            <Css.BoxContent>
                <Css.BoxHead>
                    <div></div>
                    <Css.Title>Cadastro</Css.Title>
                    <Link to="/login">
                    <p>Ir para Login</p>
                    </Link>
                </Css.BoxHead>
                <Css.Form onSubmit={handleSubmit(registerUser)}>
                    <Css.Field>
                        <Css.FormHead>
                            <Css.LabelText>Nome</Css.LabelText>
                            {errors.name && <Errors text="Nome deve conter ao menos 6 caracteres" />}
                        </Css.FormHead>
                        <input {...register("name")} />
                    </Css.Field>
                    <Css.Field>
                        <Css.FormHead>
                            <Css.LabelText>Email</Css.LabelText>
                            {errors.email && <Errors text="Digite um email válido" />}
                        </Css.FormHead>
                        <input {...register("email")} />
                    </Css.Field>
                    <Css.Field>
                        <Css.FormHead>

                            <Css.LabelText>Senha</Css.LabelText>

                            <i
                                onClick={() => setTypePassword(typePassword === 'password' ? "text" : "password")}>
                                <IoEyeSharp />
                            </i>
                            {errors.password && <Errors text="Senha deve conter ao menos 6 caracteres" />}

                        </Css.FormHead>
                        <input
                            {...register("password")}
                            type={typePassword}
                        />
                    </Css.Field>
                    <Css.Field>
                        <Css.FormHead>

                            <Css.LabelText>Confirme sua senha</Css.LabelText>

                            {errors.confirmPassword && <Errors text="Senhas não batem" />}
                        </Css.FormHead>
                        <input
                            {...register("confirmPassword")}
                            type="password"
                        />
                    </Css.Field>
                    <Css.BtnAction
                        type='submit' color='orange'>Cadastrar</Css.BtnAction>
                    <Css.OtherOption>
                        <span />
                        <p>ou</p>
                        <span />
                    </Css.OtherOption>
                    <Css.GoogleBtn>Entre com sua conta google
                        <FaGoogle />
                    </Css.GoogleBtn>
                </Css.Form>
            </Css.BoxContent>
        </Css.Container>
    );
}

export default Register;