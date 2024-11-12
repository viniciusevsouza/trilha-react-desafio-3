import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: left;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight; 700;
    font-size: 32px;
    width: 350px;
    margin-bottom: 20px;
    line-height 44px;
    
    color: #FFFFFF;
`

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight; 700;
    width: 368px;
    font-size: 32px;
    margin-bottom: 20px;
    line-height 44px;
    
`

export const SubTitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight; 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height 25px;
    
`

export const PoliticasText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height 24px;
    width: 372px;

    color: #FFFFFF;
    
`

export const ContaText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height 19px;

    color: #FFFFFF;
    
`

export const LoginText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height 19px;
    margin-left: 10px;

    color: #23DD7A;

    &:hover {
            opacity: 0.6;
            cursor: pointer;
        }
;
    
`

export const Wrapper = styled.div`
    max-width: 374px;
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
`
export const Column = styled.div`
    flex:1;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-top: 20px;
`
