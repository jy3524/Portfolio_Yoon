import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/Header';
import theme from '../components/Theme';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Header router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
      </Header>
    </ChakraProvider>
  );
}

export default MyApp;