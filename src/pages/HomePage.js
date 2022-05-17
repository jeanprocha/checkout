import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, StatusBar, ActivityIndicator, View, FlatList, Text, TouchableOpacity } from 'react-native'

import HeaderHome from '../components/HeaderHome'
import { appInitialApi } from '../store/actions/appActions'
import FilterOptions from '../components/FilterOptions'
import Carousel from '../components/Carousel'
import Listing from '../components/Listing'

import { useNavigation } from '@react-navigation/native'

export default HomePage = () => {
    const appReducer = useSelector(states => states.appReducer)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        dispatch(appInitialApi())

    }, [])

    const buttonCart = () => {
        if (!appReducer.cart.length) {
            return
        }
        return (
            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Cart')}>
                    <Text style={styles.textBtn}>IR PARA CARRINHO</Text>
                </TouchableOpacity>
            </View>
        )
    }

    useEffect(() => {
        buttonCart()
    }, [appReducer])

    return (
        <>
            <StatusBar barStyle='dark-content' />
            {!appReducer.loading ?
                <View style={styles.loading}>
                    <ActivityIndicator color={"#000"} size={'large'} />
                </View>
                :
                <FlatList
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={
                        <>
                            <Listing />
                            {buttonCart()}
                        </>
                    }
                    ListHeaderComponent={
                        <>
                            <HeaderHome />
                            <FilterOptions />
                            <Carousel />

                        </>
                    }
                />
            }
        </>
    )
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F8F8F8"
    },
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8"

    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#504DB6",
        borderRadius: 37,
        marginTop: 29,
        width: '86%',
        alignSelf: 'center',
        height: 50,
        // position: 'absolute',
        // bottom: 50
    },
    textBtn: {
        fontFamily: 'Work Sans',
        fontSize: 14,
        fontWeight: '700',
        color: '#FFF'
    },
    containerBtn: {
        height: 120,
        backgroundColor: "#FFF",
        marginTop: -40,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14
    }
})