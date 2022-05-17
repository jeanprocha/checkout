import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { TouchableOpacity, Text, SafeAreaView, StyleSheet, View } from 'react-native'
import SVG_BAG from '../../assets/svg/BAG_1.svg'
import IconBadge from 'react-native-icon-badge'
import { useSelector } from 'react-redux'

export default HeaderHome = () => {
    const navigation = useNavigation()
    const appReducer = useSelector(state => state.appReducer)

    return (
        <SafeAreaView style={ styles.container }>
            <Text style={styles.title}>Produtos</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <IconBadge 
                    MainElement={
                        <SVG_BAG width={21.33} height={24.5} />
                    }
                    BadgeElement={
                        <Text style={{ color: "#9A8BFF", fontSize: 10 }}>{appReducer.cart.length}</Text>
                    }
                    IconBadgeStyle={{
                        // width: 10,
                        height: 14,
                        backgroundColor: "#fff",
                        right: -10
                    }}
                    Hidden={appReducer.cart.length == 0}
                />
       
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 19,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        color: "#000",
        fontFamily: "Work Sans",
        fontWeight: '700',

    },

})