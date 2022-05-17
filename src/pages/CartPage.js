import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import HeaderCardPage from '../components/HeaderCardPage'
import ListCard from '../components/ListCard'
import ListNotItensCart from '../components/ListNotItensCart'

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
                    <View style={styles.line}>
                        <Text style={styles.text}>Total:  </Text>
                        <Text style={styles.text}>${price().toFixed(2)}</Text>
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Success')}>
                        <Text style={styles.textBtn}>FINALIZAR COMPRA</Text>
                    </TouchableOpacity>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#EBEBED',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10
    },
    text: {
        fontFamily: "Work Sans",
        fontWeight: '700',
        lineHeight: 16.84,
        fontSize: 14,
        color: "#404040"
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#504DB6",
        borderRadius: 37,
        marginTop: 29,
        width: '86%',
        alignSelf: 'center',
        height: 50
    },
    textBtn: {
        fontFamily: 'Work Sans',
        fontSize: 14,
        fontWeight: '700',
        color: '#FFF'
    }
})