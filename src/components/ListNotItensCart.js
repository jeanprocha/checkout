import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function ListNotItensCart() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu Carrinho</Text>

            <Text style={ styles.text }>NENHUM ITEM ADICIONADO</Text>
            <Text style={ styles.text }>NO CARRINHO.</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textBtn}>ADICIONAR ITENS</Text>
            </TouchableOpacity>

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
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#8775FE",
        borderRadius: 37,
        marginTop: 14,
        width: '86%',
        alignSelf: 'center',
        height: 37,
        // position: 'absolute',
        // bottom: 50
    },
    textBtn: {
        fontFamily: 'Work Sans',
        fontSize: 14,
        fontWeight: '700',
        color: '#FFF'
    },
    text: {
        fontFamily: "Work Sans",
        fontSize: 14,
        color: "#9A9999",
        textAlign: 'center',
        fontWeight: '700'
    }
})