import React from 'react'

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import SVG_Buy from '../../assets/svg/ButtonBuy.svg'

export default ItemCarosel = ({ item, onPress }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.img} />
            <Text style={styles.tag}>{item.category}</Text>
            <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
            <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
            <View style={styles.linePrice}>
                <Text style={ styles.price }>${parseFloat( item.price ).toFixed(2)}</Text>
                <TouchableOpacity onPress={() => onPress(item)}>
                    <SVG_Buy width={30} height={30} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 172,

    },
    img: {
        width: 172,
        height: 183,
        borderRadius: 10,
        resizeMode: 'contain'
    },
    tag: {
        fontFamily: "Work Sans",
        fontWeight: '700',
        fontSize: 8,
        lineHeight: 9.38,
        color: "#8775FE"
    },
    title: {
        fontFamily: "Work Sans",
        fontSize: 14,
        fontWeight: '700',
        color: "#000",
        lineHeight: 16.42
    },
    description: {
        fontFamily: "Work Sans",
        fontSize: 10,
        fontWeight: '500',
        color: "#85868A",
        lineHeight: 11.73,

    },
    linePrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    price: {
        fontFamily: "Work Sans",
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 28.66,
        color: "#8775FE"
    }
})