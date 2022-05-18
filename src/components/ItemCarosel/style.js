import styled  from 'styled-components/native'

export const Container = styled.View`
    width: 172px;
`

export const Image = styled.Image`
    width: 172px;
    height: 183px;
    border-radius: 10px;
`

export const Tag = styled.Text`
    font-family: "Work Sans";
    font-weight: 700;
    font-size: 8px;
    line-height: 9.38px;
    color: ${props => props.theme.textColor4};
`

export const Title = styled.Text`
    font-family: "Work Sans";
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.textColor};
    line-height: 16.42px;
`

export const Description = styled.Text`
    font-family: "Work Sans";
    font-size: 10px;
    font-weight: 500;
    color: ${props => props.theme.textColor3};
    line-height: 11.73px;
`

export const LinePrice = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`

export const Price = styled.Text`
    font-family: "Work Sans";
    font-size: 20px;
    font-weight: 700;
    line-height: 28.66px;
    color: ${props => props.theme.textColor4};
`