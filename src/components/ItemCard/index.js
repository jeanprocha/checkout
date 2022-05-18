import React, { useState } from 'react'

import { View, Modal } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import SVG_ADD from '../../../assets/svg/ADD.svg'
import SVG_REDUCE from '../../../assets/svg/REDUCE.svg'
import { appAddCart, appRemoveItemCart } from '../../store/actions/appActions'

import { ContainerModal, CardModal, TitleModal, SubTitleModal, TextPro, TextCanc, Line, Border, Border2, Container, Image, Info, Title, Price } from './style'

export default ItemCard = ({ item, list }) => {
    const dispatch = useDispatch()
    const appReducer = useSelector(state => state.appReducer)
    const [visible, setVisible] = useState(false)

    const add = () => {
        dispatch(appAddCart({ item, list: appReducer.cart, index: list.length }))
    }

    const remove = () => {
        dispatch(appRemoveItemCart({ item, list: appReducer.cart }))
    }

    return (
        <Container>
            <Modal
                visible={visible}
                transparent
            >
                <ContainerModal onPress={() => setVisible(false)}>
                    <CardModal>
                        <TitleModal>Remover Item</TitleModal>
                        <SubTitleModal>Se deseja remover o item do carrinho clique em prosseguir.</SubTitleModal>
                        <Line onPress={remove}>
                            <TextPro>PROSSEGUIR</TextPro>
                        </Line>
                        <Line onPress={() => setVisible(false)}>
                            <TextCanc>CANCELAR</TextCanc>
                        </Line>
                    </CardModal>
                </ContainerModal>
            </Modal>
            <Image source={{ uri: item.image }} style={{ resizeMode: 'contain' }} />
            <Info>
                <Title numberOfLines={1}>{item.title}</Title>
                <Price>1x ${parseFloat(item.price).toFixed(2)}</Price>
            </Info>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Border onPress={() => setVisible(true)} >
                    <SVG_REDUCE />
                </Border>
                <Border2 onPress={add}>
                    <SVG_ADD />
                </Border2>
            </View>
        </Container>
    )
}

