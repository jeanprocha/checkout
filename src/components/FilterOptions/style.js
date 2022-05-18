import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    margin-right: 19px;
    margin-left: 19px;
    margin-top: 10px;
`

export const Item = styled.TouchableOpacity`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-radius: 8px;
    margin-right: 14px;
`

export const Title = styled.Text`
    font-size: 8px;
    font-family: "Work Sans";
    font-weight: 700;
    text-transform: uppercase;
    color: #6f6f6f;
    margin-bottom: 4px;
`

export const Text = styled.Text`
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 800;
    text-transform: capitalize;
`