import Head from 'next/head';
import Navbar from './Navbar.js';
import { Box, Container } from '@chakra-ui/react';

export default function Header({ children, router }) {
  return ( 
    <Box as="main" pb={8}> 
      <Head>
        <title>Jeongin Yoon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box> 
  );
}
