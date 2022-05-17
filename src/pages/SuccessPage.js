import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import SVG_SUCCESS from '../../assets/svg/SUCCESS.svg'
import { appRemoveCart } from '../store/actions/appActions'

export default function SuccessPage() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    
    const handlePress = () => {
        dispatch(appRemoveCart())
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.border}>
                <SVG_SUCCESS />
            </View>
            <Text style={styles.title}>SUCESSO!</Text>
            <Text style={styles.subTitle}>Compra realizada com sucesso, aproveite!</Text>
            <TouchableOpacity style={styles.btn} onPress={ handlePress }>
                <Text style={styles.textBtn}>PROSSEGUIR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8775FE"
    },
    title: {
        fontSize: 22,
        fontFamily: "Work Sans",
        fontWeight: '700',
        color: "#FFF",
        textAlign: 'center',
        marginTop: 20
    },
    subTitle: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: "Work Sans",
        fontWeight: '500',
        color: "#FFF",
        marginTop: 10

    },
    border: {
        borderWidth: 4,
        borderColor: "#fff",
        borderRadius: 100,
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '70%'
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
        position: 'absolute',
        bottom: 50
    },
    textBtn: {
        fontFamily: 'Work Sans',
        fontSize: 14,
        fontWeight: '700',
        color: '#FFF'
    }
})