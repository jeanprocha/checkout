import styled from 'styled-components/native'

export const Container = styled.View`
    width: 155px;
`

export const Image = styled.ImageBackground`
    width: 155px;
    height: 183px;
    border-radius: 16px;

    align-items: flex-end;
    justify-content: flex-end;
`

export const Tag = styled.Text`
    font-family: "Work Sans";
    font-weight: 700;
    font-size: 8px;
    line-height: 9.38px;
    color: #8775fe;
`

export const Title = styled.Text`
    font-family: "Work Sans";
    font-size: 14px;
    font-weight: 700;
    color: #000;
    line-height: 16.42px;
`

export const LinePrice = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2px;
`

export const Price = styled.Text`
    font-family: "Work Sans";
    font-size: 20px;
    font-weight: 700;
    line-height: 28.66px;
    color: #8775fe;
`

export const TouchIcon = styled.TouchableOpacity`
    margin-right: 9.73px;
`