import React from 'react'

import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IconBadge from 'react-native-icon-badge'
import { useSelector } from 'react-redux'

import SVG_BAG from '../../../assets/svg/BAG_1.svg'
import { Container, Title, CartNumber } from './style'

export default HeaderHome = () => {
    const navigation = useNavigation()
    const appReducer = useSelector(state => state.appReducer)

    return (
        <Container>
            <Title>Produtos</Title>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <IconBadge 
                    MainElement={
                        <SVG_BAG width={21.33} height={24.5} />
                    }
                    BadgeElement={
                        <CartNumber>{appReducer.cart.length}</CartNumber>
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
        </Container>
    )
}
