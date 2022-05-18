import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { useDispatch } from 'react-redux'
import { appRemoveCart } from '../../store/actions/appActions'

import SVG_SUCCESS from '../../../assets/svg/SUCCESS.svg'
import { Container, Title, SubTitle, Border, Button, TextButton } from './style'

export default function SuccessPage() {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const handlePress = () => {
        dispatch(appRemoveCart())
        navigation.navigate('Home')
    }

    return (
        <Container>
            <StatusBar barStyle='light-content' />
            <>
                <Border>
                    <SVG_SUCCESS />
                </Border>
                <Title>SUCESSO!</Title>
                <SubTitle>Compra realizada com sucesso, aproveite!</SubTitle>
            </>
            <Button onPress={handlePress}>
                <TextButton>PROSSEGUIR</TextButton>
            </Button>
        </Container>
    )
}