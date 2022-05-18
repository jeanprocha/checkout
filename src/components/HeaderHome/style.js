import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    margin-right: 19px;
    margin-left: 19px;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-size: 18px;
    color: ${props => props.theme.textColor};
    font-family: "Work Sans";
    font-weight: 700;
`

export const CartNumber = styled.Text`
    color: ${props => props.theme.badgeText};
    font-size: 10px;
`