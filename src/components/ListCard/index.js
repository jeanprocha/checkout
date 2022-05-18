import React from 'react'

import { ActivityIndicator, FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'

import ItemCard from '../ItemCard'
import { Container, Title, ContainerIndicator } from './style'

export default ListCard = () => {
    const appReducer = useSelector(state => state.appReducer)
    const list = appReducer.cart
    
    return (
        <Container>
            <Title>Meu Carrinho</Title>

            {!appReducer.homeLoading ?
                <ContainerIndicator>
                    <ActivityIndicator size={'large'} color={"#000"} />
                </ContainerIndicator>
                :
                <FlatList
                    data={appReducer.cart}
                    renderItem={({ item }) => <ItemCard item={item} list={list} />}
                    keyExtractor={(item) => item.index}
                    style={{ height: '80%'}}
                    showsVerticalScrollIndicator={false}
                />
            }
        </Container>
    )
}