import { 
  ChakraProvider,
  color,
  extendTheme,
  Icon
} from '@chakra-ui/react'
import '../styles/globals.css'
import Head from 'next/head';

// import './theme.js'

function MyApp({ Component, pageProps }) {

  const theme = extendTheme({
    fonts: {
      Header: {
        baseStyle:{
          fontWeight:'bold',
          color: "#303030"
        }
      },
      body: 'Noto Sans KR, sans-serif',
      baseStyle:{
        letterSpacing: "-1px",
        fontWeight: 'light',
        color: "#303030"
      },
    },
  })
  
  return (

    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
