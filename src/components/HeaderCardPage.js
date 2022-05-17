import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import ArrowLeft from '../../assets/svg/ArrowLeft.svg'

export default HeaderCardPage = () => {
    const navigate = useNavigation()

    return (
        <SafeAreaView style={ styles.container }>
            <TouchableOpacity onPress={() => navigate.goBack()} style={{ width: 20, height: 20 }}>
                <ArrowLeft width={6.13} height={10} />
            </TouchableOpacity>
            <Text style={ styles.title }>CARRINHO</Text>
            <View />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: "Work Sans",
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 14,
        color: '#85868A'
    }

})