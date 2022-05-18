import styled from 'styled-components/native'

export const Container = styled.View`
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 31px;
`
export const Title = styled.Text`
    font-family: "Work Sans";
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    color: ${props => props.theme.textColor};
    margin-bottom: 45px;
`

export const ContainerIndicator = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`