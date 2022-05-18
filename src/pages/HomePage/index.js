import React, { useEffect, useState } from 'react'

import { StatusBar, ActivityIndicator, Platform, useColorScheme } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appInitialApi, appCart } from '../../store/actions/appActions'

import HeaderHome from '../../components/HeaderHome'
import FilterOptions from '../../components/FilterOptions'
import Carousel from '../../components/Carousel'
import Listing from '../../components/Listing'
import { Loading, Container, Button, TextButton, ContainerButton, TextAlert } from './style'


export default HomePage = (props) => {
    const appReducer = useSelector(states => states.appReducer)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const deviceTheme = useColorScheme()
    const [alert, setAlert] = useState(false)

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
        if (data) {
            dispatch(appCart({ item: false, list: data }))
        }
    }

    useEffect(() => {
        getData()
        setTimeout(() => {
            if (appReducer.loading == false) {
                setAlert(true)
            }
        }, 4000);
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
                    <ActivityIndicator color={deviceTheme == 'dark' ? '#fff' : "#000"} size={'large'} />
                    {alert && <TextAlert >Carregando informações!</TextAlert> }
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
