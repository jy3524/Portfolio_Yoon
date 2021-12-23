import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/Header';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Header router={router}>
        <Component {...pageProps} key={router.route}/>
      </Header>
    </ChakraProvider>
  )
}

export default MyApp