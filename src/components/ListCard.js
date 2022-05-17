import React from 'react'

import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import ItemCard from './ItemCard'

export default ListCard = () => {
    const appReducer = useSelector(state => state.appReducer)
    const list = appReducer.cart
    
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Meu Carrinho</Text>

            {!appReducer.homeLoading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                    <ActivityIndicator size={'large'} color={"#000"} />
                </View>
                :
                <FlatList
                    data={appReducer.cart}
                    renderItem={({ item }) => <ItemCard item={item} list={list} />}
                    keyExtractor={(item) => item.index}
                    style={{ height: 500 }}
                    showsVerticalScrollIndicator={false}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginHorizontal: 20,
        marginTop: 31

    },
    title: {
        fontFamily: "Work Sans",
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 28,
        color: '#000',
        marginBottom: 45
    }

})