import React from 'react'
import { useNavigate } from "react-router-dom";

import {
    Wrapper,
    Container,
    BuscarInputContainer,
    Column,
    Row,
    Input,
    Menu,
    MenuRight,
    UserPicture,
} from './styles';

import { Button } from '../Button';
import logo from '../../assets/logo-dio.png'

const Header = ({ autenticado }) => {

    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/login')
    }

    const handleClickCadastrar = () => {
        navigate('/cadastro')
    }
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo da dio" />
                    {autenticado ? (<>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/180620330?v=4' />
                    ) : (<>
                        <MenuRight href="/" >Home</MenuRight>
                        <Button title={'Entrar'} onClick={handleClickLogin}/>
                        <Button title={'Cadastrar' } onClick={handleClickCadastrar} />
                    </>)}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header } 