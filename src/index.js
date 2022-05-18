import React from "react";

import { useColorScheme } from 'react-native'

import Route from './routes/stackNavigation'

import { ThemeProvider } from 'styled-components'
import themes from './theme'

export default App = () => {
    const deviceTheme = useColorScheme()

    const theme = themes[deviceTheme] || theme.light
    
    return (
        <ThemeProvider theme={theme}>
            <Route />
        </ThemeProvider>
    )
}