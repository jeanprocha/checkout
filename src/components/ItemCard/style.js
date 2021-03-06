import styled from "styled-components/native"

export const ContainerModal = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const CardModal = styled.View`
    background-color: ${props => props.theme.backgroundPage5};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    width: 80%;
`

export const TitleModal = styled.Text`
    font-family: "Work Sans";
    font-weight: 700;
    font-size: 14px;
    color: ${props => props.theme.textColor6};
`

export const SubTitleModal = styled.Text`
    margin-top: 5px;
    margin-bottom: 14px;
    font-family: "Work Sans";
    font-weight: 600;
    font-size: 10px;
    color: ${props => props.theme.textColor6};
    width: 76%;
    text-align: center;
`

export const TextPro = styled.Text`
    font-family: "Work Sans";
    font-weight: 700;
    font-size: 10px;
    color: ${props => props.theme.textColor8};
    padding-top: 14px;
    padding-bottom: 14px;
`

export const TextCanc = styled.Text`
    font-family: "Work Sans";
    font-weight: 700;
    font-size: 10px;
    color: ${props => props.theme.textColor9};
    padding-top: 14px;
    padding-bottom: 14px;
`

export const Line = styled.TouchableOpacity`
    border-top-width: 1px;
    border-color: ${props => props.theme.borderColor};
    width: 100%;
    align-items: center;
`

export const Border = styled.TouchableOpacity`
    border-width: 1px;
    border-color: ${props => props.theme.borderColor3};
    height: 34px;
    width: 43px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    align-items: center;
    justify-content: center;
`

export const Border2 = styled.TouchableOpacity`
    border-width: 1px;
    border-color: ${props => props.theme.borderColor3};
    height: 34px;
    width: 43px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    align-items: center;
    justify-content: center;
`

export const Container = styled.View`
    height: 72px;
    width: 100%;
    align-self: center;
    background-color: ${props => props.theme.backgroundPage3};
    border-radius: 12px;
    margin-bottom: 16px;
    flex-direction: row;
    padding-left: 9px;
    padding-right: 9px;
    align-items: center;
`

export const Image = styled.Image`
    height: 50px;
    width: 38px;
    border-radius: 10px;
    background-color: ${props => props.theme.backgroundPage7};
`

export const Info = styled.View`
    margin-left: 11px;
    width: 200px;
`

export const Title = styled.Text`
    font-family: "Work Sans";
    font-size: 14px;
    color: #000;
    font-weight: 700;
`

export const Price = styled.Text`
    font-family: "Work Sans";
    font-size: 10px;
    font-weight: 700;
    line-height: 14.33px;
    color: ${props => props.theme.textColor4};
`