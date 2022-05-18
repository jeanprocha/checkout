import styled from 'styled-components/native'

export const Loading = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.backgroundPage};
`;

export const Container = styled.FlatList`
    flex: 1;
    background-color: ${props => props.theme.backgroundPage};
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.backgroundPage4};
    border-radius: 37px;
    margin-top: 29px;
    width: 86%;
    align-self: center;
    height: 50px;
`;

export const TextButton = styled.Text`
    font-family: 'Work Sans';
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.textColor11};
`;

export const ContainerButton = styled.View`
    height: 120px;
    background-color: ${props => props.theme.backgroundPage5};
    margin-top: -40px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`;

export const TextAlert = styled.Text`
    text-align: center;
    font-size: 14px;
    color: ${props => props.theme.textColor};
    margin-top: 6px;
`