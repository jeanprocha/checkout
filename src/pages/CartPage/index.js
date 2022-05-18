import React from 'react'

import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import HeaderCardPage from '../../components/HeaderCardPage'
import ListCard from '../../components/ListCard'
import ListNotItensCart from '../../components/ListNotItensCart'
import { Line, Text, Button, TextButton } from './style'

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
        <View style={{ backgroundColor: "#F8F8F8", flex: 1}}>
            <HeaderCardPage />
            {!appReducer.cart.length ?
                <ListNotItensCart />
                :
                <>
                    <ListCard />
                    <Line>
                        <Text>Total:  </Text>
                        <Text>${price().toFixed(2)}</Text>
                    </Line>

                    <Button onPress={() => navigation.navigate('Success')}>
                        <TextButton>FINALIZAR COMPRA</TextButton>
                    </Button>
                </>
            }
        </View>
    )
}