import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { View } from 'react-native'
import ArrowLeft from '../../../assets/svg/ArrowLeft.svg'

import { Container, Title, TouchIcon } from './style'

export default HeaderCardPage = () => {
    const navigate = useNavigation()

    return (
        <Container>
            <TouchIcon onPress={() => navigate.goBack()}>
                <ArrowLeft width={6.13} height={10} />
            </TouchIcon>
            <Title>CARRINHO</Title>
            <View />
        </Container>
    )
}

