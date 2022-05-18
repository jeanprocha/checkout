import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #8775FE;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-family: "Work Sans";
    font-weight: 700;
    color: #FFFFFF;
    text-align: center;
    margin-top: 10px;
`;

export const SubTitle = styled.Text`
    font-size: 14px;
    text-align: center;
    font-weight: 500;
    font-family: "Work Sans";
    color: #ffffff;
    margin-top: 10px;
`;

export const Border = styled.View`
    border-width: 4px;
    border-color: #ffffff;
    border-radius: 100px;
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;
    align-self: center;
    /* margin-top: 60%; */
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
    position: absolute;
    bottom: 50px;
`;

export const TextButton = styled.Text`
    font-family: "Work Sans";
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
`;