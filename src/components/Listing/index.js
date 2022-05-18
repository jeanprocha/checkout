import React from 'react'

import { FlatList, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { appCart } from '../../store/actions/appActions'

import ItemListing from '../ItemListing'
import { Container, Title, ContainerIndicator } from './style'

export default Listing = () => {
    const appReducer = useSelector(states => states.appReducer)
    const dispatch = useDispatch()

    const handlePress = ( item ) => {
        dispatch(appCart({ item: {index: appReducer.cart.length, ... item}, list: appReducer.cart }))
    }

    return (
        <Container>
            <Title>Listagem</Title>
            {!appReducer.homeLoading ?
                <ContainerIndicator>
                    <ActivityIndicator size={'large'} color={"#000"} />
                </ContainerIndicator>
                :
                <FlatList
                    data={appReducer.products}
                    renderItem={({ item }) => <ItemListing item={item} onPress={handlePress} />}
                    keyExtractor={(item) => item.id}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 44 }}
                    numColumns={2}
                />
            }
        </Container>
    )
}