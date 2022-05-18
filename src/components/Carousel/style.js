import styled from 'styled-components/native'

export const Container = styled.View`
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 25.5px;
    margin-top: 27px;
    border-bottom-width: 1px;
    border-color: ${props => props.theme.borderColor};
    min-height: 360px;
`

export const Title = styled.Text`
    font-family: "Work Sans";
    font-size: 24px;
    font-weight: 600;
    color: ${props => props.theme.textColor};
    margin-bottom: 20px;
`

export const ContainerIndicator = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`