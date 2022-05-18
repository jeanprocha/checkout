import styled from 'styled-components/native'

export const Loading = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #F8F8F8;
`;

export const Container = styled.FlatList`
    flex: 1;
    background-color: #F8F8F8;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #504DB6;
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
    color: #ffffff;
`;

export const ContainerButton = styled.View`
    height: 120px;
    background-color: #ffffff;
    margin-top: -40px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`;