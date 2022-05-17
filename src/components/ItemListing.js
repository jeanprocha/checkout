import React from 'react'

import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import SVG_Buy from '../../assets/svg/ButtonBuy.svg'

export default ItemListing = ({ item, onPress }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: item.image }} style={styles.img} imageStyle={{ borderRadius: 16, resizeMode: 'contain' }}>
                <TouchableOpacity style={{ marginRight: 9.73}} onPress={() => onPress(item)}>
                    <SVG_Buy width={30} height={30} />
                </TouchableOpacity>
            </ImageBackground>
            <Text style={styles.tag}>{item.category}</Text>
            <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
            <View style={styles.linePrice}>
                <Text style={styles.price}>${parseFloat(item.price).toFixed(2)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 155,
    },
    img: {
        width: 155,
        height: 183,
        borderRadius: 16,
        resizeMode: 'contain',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
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
        marginTop: 2
    },
    price: {
        fontFamily: "Work Sans",
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 28.66,
        color: "#8775FE"
    }
})