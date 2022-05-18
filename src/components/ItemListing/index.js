import React from 'react'

import SVG_Buy from '../../../assets/svg/ButtonBuy.svg'
import { Container, Image, Tag, Title, LinePrice, Price, TouchIcon } from './style'

export default ItemListing = ({ item, onPress }) => {
    return (
        <Container>
            <Image source={{ uri: item.image }} imageStyle={{ borderRadius: 16, resizeMode: 'contain' }}>
                <TouchIcon onPress={() => onPress(item)}>
                    <SVG_Buy width={30} height={30} />
                </TouchIcon>
            </Image>
            <Tag>{item.category}</Tag>
            <Title numberOfLines={1}>{item.title}</Title>
            <LinePrice>
                <Price>${parseFloat(item.price).toFixed(2)}</Price>
            </LinePrice>
        </Container>
    )
}

