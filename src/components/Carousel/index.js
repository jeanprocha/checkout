import React from 'react'

import { View, FlatList, ActivityIndicator, useColorScheme } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { appCart } from '../../store/actions/appActions'

import ItemCarosel from '../ItemCarosel'
import { Container, Title, ContainerIndicator } from './style'

export default Carousel = () => {
    const appReducer = useSelector(states => states.appReducer)
    const dispatch = useDispatch()
    const deviceTheme = useColorScheme()

    const handlePress = ( item ) => {
        dispatch(appCart({ item: {index: appReducer.cart.length, ... item}, list: appReducer.cart }))
    }

    return (
        <Container>
            <Title>Novidades</Title>
            {!appReducer.homeLoading ?
                <ContainerIndicator>
                    <ActivityIndicator size={'large'} color={deviceTheme == 'dark' ? '#fff' : "#000"} />
                </ContainerIndicator>
                :
                <FlatList horizontal
                    data={appReducer.products.slice(0, 5)}
                    renderItem={({ item }) => <ItemCarosel item={item} onPress={handlePress} />}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={
                        () => <View style={{ width: 48 }} />
                    }
                />
            }
        </Container>
    )
}
