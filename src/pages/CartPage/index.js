import React from 'react'

import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import HeaderCardPage from '../../components/HeaderCardPage'
import ListCard from '../../components/ListCard'
import ListNotItensCart from '../../components/ListNotItensCart'
import { Container, Line, Text, Button, TextButton } from './style'

export default CardPage = () => {
    const appReducer = useSelector(state => state.appReducer)
    const navigation = useNavigation()

    const price = () => {
        let priceValue = 0

        appReducer.cart.map(item => {
            priceValue = parseFloat(priceValue) + parseFloat(item.price)
        })

        return priceValue
    }

    return (
        <Container style={{ paddingTop: Platform.OS == 'android' && 10 }}>
            <HeaderCardPage />
            {!appReducer.cart.length ?
                <ListNotItensCart />
                :
                <View style={{ height: '80%' }}>
                    <ListCard />
                    <Line>
                        <Text>Total:  </Text>
                        <Text>${price().toFixed(2)}</Text>
                    </Line>

                    <Button onPress={() => navigation.navigate('Success')}>
                        <TextButton>FINALIZAR COMPRA</TextButton>
                    </Button>
                </View>
            }
        </Container>
    )
}