import React, { useEffect } from 'react'

import { StatusBar, ActivityIndicator, Platform } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appInitialApi, appCart } from '../../store/actions/appActions'

import HeaderHome from '../../components/HeaderHome'
import FilterOptions from '../../components/FilterOptions'
import Carousel from '../../components/Carousel'
import Listing from '../../components/Listing'
import { Loading, Container, Button, TextButton, ContainerButton } from './style'


export default HomePage = ( props ) => {
    const appReducer = useSelector(states => states.appReducer)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        dispatch(appInitialApi())
    }, [])

    const getData = async () => {
        const data = await AsyncStorage.getItem('@checkout')
            .then((json) => {
                return json != null ? JSON.parse(json) : false;
            })
            .catch(() => {
                return false
            })
            if( data ){
                dispatch(appCart({ item: false, list: data }))
            }
    }

    useEffect(() => {
        getData()
    }, [])

    const buttonCart = () => {
        if (!appReducer.cart.length) {
            return
        }
        return (
            <ContainerButton>
                <Button onPress={() => navigation.navigate('Cart')}>
                    <TextButton>IR PARA CARRINHO</TextButton>
                </Button>
            </ContainerButton>
        )
    }

    useEffect(() => {
        buttonCart()
    }, [appReducer])

    return (
        <>
            <StatusBar barStyle='default' />
            {!appReducer.loading ?
                <Loading>
                    <ActivityIndicator color={"#000"} size={'large'} />
                </Loading>
                :
                <Container
                    style={{ paddingTop: Platform.OS == 'android' && 10 }}
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={
                        <>
                            <Listing />
                            {buttonCart()}
                        </>
                    }
                    ListHeaderComponent={
                        <>
                            <HeaderHome />
                            <FilterOptions />
                            <Carousel />

                        </>
                    }
                />
            }
        </>
    )
}
