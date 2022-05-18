import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    margin-left: 20px;
    margin-right: 20px;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-family: "Work Sans";
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    color: ${props => props.theme.textColor3};

`

export const TouchIcon = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
`