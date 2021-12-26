import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/Header';
import theme from '../components/Theme';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Header router={router}>
        <Component {...pageProps} key={router.route}/>
      </Header>
    </ChakraProvider>
  );
}

export default MyApp;