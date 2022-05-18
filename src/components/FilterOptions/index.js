import React, { useState } from 'react'

import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { appGetProducts } from '../../store/actions/appActions'

import { Container, Item, Title, Text } from './style'

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
            <Item style={{ backgroundColor: select == text ? '#8775FE' : '#FFF' }} onPress={() => { handlePress(text) }}>
                <Text style={{ color: select == text ? '#FFF' : '#B4B4B6'}}>{text}</Text>
            </Item>
        )
    }

    return (
        <Container>
            <Title>filtrar categoria</Title>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {appReducer.category.map((item) => {
                    return <ItemList text={item} key={item} />
                })}
            </ScrollView>
        </Container>
    )
}
