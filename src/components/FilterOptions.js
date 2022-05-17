import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { appGetProducts, appLoading } from '../store/actions/appActions'

export default FilterOptions = () => {
    const appReducer = useSelector(state => state.appReducer)
    const [select, setSelect] = useState(appReducer.category[0])
    const dispatch = useDispatch()

    const handlePress = (text) => {
        if( text !== select ){
            setSelect(text)
            dispatch(appGetProducts(text))
        }
    }

    const ItemList = ({ text }) => {
        return (
            <TouchableOpacity style={[ styles.item, { backgroundColor: select == text ? '#8775FE' : '#FFF' } ]} onPress={() => { handlePress(text) }}>
                <Text style={[styles.text,{ color: select == text ? '#FFF' : '#B4B4B6'}]}>{text}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={ styles.title }>filtrar categoria</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {appReducer.category.map((item) => {
                    return <ItemList text={item} key={item} />
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 19,
        marginTop: 10
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        marginRight: 14,
    },
    title: {
        fontSize: 8,
        fontFamily: "Work Sans",
        fontWeight: '700',
        textTransform: 'uppercase',
        color: "#6F6F6F",
        marginBottom: 4

    },
    text: {
        fontFamily: "Work Sans",
        fontSize: 8,
        fontWeight: '800',
        textTransform: 'capitalize'
    }

})