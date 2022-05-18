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

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.backgroundPage2};
    border-radius: 37px;
    margin-top: 14px;
    width: 86%;
    align-self: center;
    height: 37px;
`

export const TextButton = styled.Text`
    font-family: "Work Sans";
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.textColor11};
`

export const Text = styled.Text`
    font-family: "Work Sans";
    font-size: 14px;
    color: ${props => props.theme.textColor10};
    text-align: center;
    font-weight: 700
`