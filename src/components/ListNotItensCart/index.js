import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Container, Title, Button, TextButton, Text } from './style'

export default function ListNotItensCart() {
    const navigation = useNavigation()

    return (
        <Container>
            <Title>Meu Carrinho</Title>

            <Text>NENHUM ITEM ADICIONADO</Text>
            <Text>NO CARRINHO.</Text>
            <Button onPress={() => navigation.navigate('Home')}>
                <TextButton>ADICIONAR ITENS</TextButton>
            </Button>

        </Container>
    )
}