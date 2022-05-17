import React, { useState } from 'react'

import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import SVG_ADD from '../../assets/svg/ADD.svg'
import SVG_REDUCE from '../../assets/svg/REDUCE.svg'
import { appAddCart, appRemoveItemCart } from '../store/actions/appActions'

export default ItemCard = ({ item, list }) => {
    const dispatch = useDispatch()
    const appReducer = useSelector(state => state.appReducer)
    const [visible, setVisible] = useState(false)

    const add = () => {
        dispatch(appAddCart({ item, list: appReducer.cart, index: list.length }))
    }

    const remove = () => {
        dispatch(appRemoveItemCart({ item, list: appReducer.cart }))
    }

    return (
        <View style={styles.container}>
            <Modal
                visible={visible}
                transparent
            >
                <TouchableOpacity style={styles.containerModal} onPress={() => setVisible(false)}>
                    <View style={styles.cardModal}>
                        <Text style={ styles.titleModal }>Remover Item</Text>
                        <Text style={ styles.subTitleModal }>Se deseja remover o item do carrinho clique em prosseguir.</Text>
                        <TouchableOpacity onPress={remove} style={ styles.line }>
                            <Text style={ styles.textP }>PROSSEGUIR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setVisible(false)} style={ styles.line }>
                            <Text style={ styles.textC }>CANCELAR</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
            <Image source={{ uri: item.image }} style={styles.img} />
            <View style={styles.info}>
                <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>1x ${parseFloat(item.price).toFixed(2)}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={styles.border} onPress={() => setVisible(true)} >
                    <SVG_REDUCE />
                </TouchableOpacity>
                <TouchableOpacity style={styles.border2} onPress={add}>
                    <SVG_ADD />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerModal: {
        backgroundColor: "#0000008",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 40
    },
    cardModal: {
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        width: '80%'
    },
    titleModal: {
        fontFamily: "Work Sans",
        fontWeight: "700",
        fontSize: 14,
        color: "#696969"
    },
    subTitleModal: {
        marginTop: 5,
        marginBottom: 14,
        fontFamily: "Work Sans",
        fontWeight: "600",
        fontSize: 10,
        color: "#B5B5B5",
        width: '76%',
        textAlign: 'center'
    },
    textP: {
        fontFamily: "Work Sans",
        fontWeight: '700',
        fontSize: 10,
        color: "#5A9ACF",
        paddingVertical: 14
    },
    textC: {
        fontFamily: "Work Sans",
        fontWeight: '700',
        fontSize: 10,
        color: "#FD746A",
        paddingVertical: 14

    },
    line: {
        borderTopWidth: 1,
        borderColor: "#E7E7E7",
        width: '100%',
        alignItems: 'center'
        
    },
    border: {
        borderWidth: 1,
        borderColor: "#CCC",
        height: 34,
        width: 43,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    border2: {
        borderWidth: 1,
        borderColor: "#CCC",
        height: 34,
        width: 43,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        height: 72,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: '#ECE9FF',
        borderRadius: 12,
        marginBottom: 16,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingHorizontal: 9,
        alignItems: 'center'
    },
    img: {
        height: 50,
        width: 38,
        resizeMode: 'contain',
        borderRadius: 10,
        backgroundColor: "#E5E5E5"
    },
    info: {
        marginLeft: 11,
        width: 200
    },
    title: {
        fontFamily: "Work Sans",
        fontSize: 14,
        color: "#000",
        fontWeight: '700',
    },
    price: {
        fontFamily: "Work Sans",
        fontSize: 10,
        fontWeight: '700',
        lineHeight: 14.33,
        color: "#8775FE"
    }

})