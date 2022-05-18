import React from 'react'

import { TouchableOpacity } from 'react-native'
import SVG_Buy from '../../../assets/svg/ButtonBuy.svg'

import { Container, Image, Tag, Title, Description, LinePrice, Price } from './style'

export default ItemCarosel = ({ item, onPress }) => {
    return (
        <Container>
            <Image source={{ uri: item.image }} style={{ resizeMode: 'contain' }} />
            <Tag>{item.category}</Tag>
            <Title numberOfLines={1}>{item.title}</Title>
            <Description numberOfLines={2}>{item.description}</Description>
            <LinePrice>
                <Price>${parseFloat( item.price ).toFixed(2)}</Price>
                <TouchableOpacity onPress={() => onPress(item)}>
                    <SVG_Buy width={30} height={30} />
                </TouchableOpacity>
            </LinePrice>
        </Container>
    )
}

