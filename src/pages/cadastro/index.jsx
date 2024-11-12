import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

import { api } from "../../services/api";

import {
    Container,
    Title,
    Column,
    PoliticasText,
    ContaText,
    Row,
    SubTitleCadastro,
    TitleCadastro,
    Wrapper,
    LoginText,
} from "./styles";

import { Input } from '../../components/Input';


const schema = yup.object({
    nome: yup.string('nome não é valido').required('nome não é valido'),
    email: yup.string('email não é valido').email('email não é valido').required('campo obrigatorio'),
    password: yup.string('email não é valido').min(3, 'No minimo 3 caracteres').required('campo obrigatorio'),
}).required();


const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });


    const onSubmit = async formData => {

        const { data } = await api.get(`users?email=${formData.email}`);

        if(data.length && data[0].id){
            alert('email em uso')
            return
        }

        await api.post('/users', {
            nome: formData.nome,
            email: formData.email,
            senha: formData.password
          })
          .then(function (response) {
            
            alert('usuario cadastrado com sucesso');
            navigate('/login')


          })
          .catch(function (error) {
            alert('ocorreu um erro')
          });
    };


    const handleClickLogin = () => {
        navigate('/login');
    };


    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper className="form">
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubTitleCadastro>Crie sua conta e make the change._</SubTitleCadastro>
                    <form id='cadastro' onSubmit={handleSubmit(onSubmit)}>
                        <Input name='nome' errorMessage={errors?.nome?.message}
                            control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />

                        <Input name='email' errorMessage={errors?.email?.message}
                            control={control} placeholder="E-mail" leftIcon={<MdEmail />} />

                        <Input name='password' errorMessage={errors?.password?.message}
                            control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />

                        <Button title={'Criar minha conta'} variant='secondary' type='submit' />
                    </form>
                    <Row>
                        <PoliticasText>Ao clicar em "criar minha conta grátis",
                            declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</PoliticasText>
                    </Row>
                    <Row>
                        <ContaText>Ja tenho conta.</ContaText>
                        <LoginText onClick={handleClickLogin}>Fazer login</LoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }