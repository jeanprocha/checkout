import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${props => props.theme.backgroundPage};
    flex: 1;
`

export const Line = styled.View`
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: ${props => props.theme.borderColor};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
`

export const Text = styled.Text`
    font-family: "Work Sans";
    font-weight: 700;
    line-height: 16.84px;
    font-size: 14px;
    color: ${props => props.theme.textColor5};
`

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.backgroundPage4};
    border-radius: 37px;
    margin-top: 19px;
    width: 86%;
    align-self: center;
    height: 50px;
`

export const TextButton = styled.Text`
    font-family: "Work Sans";
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.textColor11};
`