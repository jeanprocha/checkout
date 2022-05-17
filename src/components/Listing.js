import React from 'react'

import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { appCart } from '../store/actions/appActions'

import ItemListing from './ItemListing'

export default Listing = () => {
    const appReducer = useSelector(states => states.appReducer)
    const dispatch = useDispatch()

    const handlePress = ( item ) => {
        dispatch(appCart({ item: {index: appReducer.cart.length, ... item}, list: appReducer.cart }))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listagem</Text>
            {!appReducer.homeLoading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                    <ActivityIndicator size={'large'} color={"#000"} />
                </View>
                :
                <FlatList
                    data={appReducer.products}
                    renderItem={({ item }) => <ItemListing item={item} onPress={handlePress} />}
                    keyExtractor={(item) => item.id}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 44 }}
                    numColumns={2}
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
        borderColor: "#EBEBED"
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
    },

})