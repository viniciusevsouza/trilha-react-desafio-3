import { Header } from "../../components/Header";
import { Card } from '../../components/Card';
import { Column, Container, Title, TitleHighlight, } from "./styles";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight> # RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={89} nome='Vinicius Evangelista' image='https://avatars.githubusercontent.com/u/180620330?v=4' />
                <UserInfo percentual={80} nome='Vinicius Evangelista' image='https://avatars.githubusercontent.com/u/180620330?v=4' />
                <UserInfo percentual={57} nome='Vinicius Evangelista' image='https://avatars.githubusercontent.com/u/180620330?v=4' />
                <UserInfo percentual={20} nome='Vinicius Evangelista' image='https://avatars.githubusercontent.com/u/180620330?v=4' />
                <UserInfo percentual={12} nome='Vinicius Evangelista' image='https://avatars.githubusercontent.com/u/180620330?v=4' />
            </Column>

        </Container >
    </>)
}

export { Feed }