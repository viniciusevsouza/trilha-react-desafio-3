import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { MdEmail, MdLock } from 'react-icons/md';

import { api } from "../../services/api";

import {
    Container,
    Title,
    Column,
    CriarText,
    EsqueciText,
    Row,
    SubTitleLogin,
    TitleLogin,
    Wrapper,
} from "./styles";

import { Input } from '../../components/Input';


const schema = yup.object({
    email: yup.string('email não é valido').email('email não é valido').required('campo obrigatorio'),
    password: yup.string('email não é valido').min(3, 'No minimo 3 caracteres').required('campo obrigatorio'),
}).required();


const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });


    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length && data[0].id){
                navigate('/feed')
                return
            }
            alert('Email ou senha invalido');

        } catch {
            alert('Houve um erro, tente novamente.');
        }
    };

    const handleClickCriar = () => {
        navigate('/cadastro');
    };

    const handleClickEsqueci = () => {
        navigate('/');
        //todo
    };



    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rapido nas empresas mias desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name='email' errorMessage={errors?.email?.message}
                            control={control} placeholder="E-mail" leftIcon={<MdEmail />} />

                        <Input name='password' errorMessage={errors?.password?.message}
                            control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />

                        <Button title={'Entrar'} variant='secondary' type='button' />
                    </form>
                    <Row>
                        <EsqueciText onClick={handleClickEsqueci}>Esqueci minha senha </EsqueciText>
                        <CriarText onClick={handleClickCriar}>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }