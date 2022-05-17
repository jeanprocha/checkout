import React from 'react'

import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { appCart } from '../store/actions/appActions'

import ItemCarosel from './ItemCarosel'

export default Carousel = () => {
    const appReducer = useSelector(states => states.appReducer)
    const dispatch = useDispatch()

    const handlePress = ( item ) => {
        dispatch(appCart({ item: {index: appReducer.cart.length, ... item}, list: appReducer.cart }))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Novidades</Text>
            {!appReducer.homeLoading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={'large'} color={"#000"} />
                </View>
                :
                <FlatList horizontal
                    data={appReducer.products.slice(0, 5)}
                    renderItem={({ item }) => <ItemCarosel item={item} onPress={handlePress} />}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={
                        () => <View style={{ width: 48 }} />
                    }
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 25.5,
        marginTop: 27,
        borderBottomWidth: 1,
        borderColor: "#EBEBED",
        minHeight: 360
    },
    img: {
        width: 172,
        height: 183,
        borderRadius: 10,
        resizeMode: 'contain'
    },
    title: {
        fontFamily: "Work Sans",
        fontSize: 24,
        fontWeight: '600',
        color: "#000",
        marginBottom: 20
    }
})