import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

export default function Header({ children, router }) {
  return ( 
    <Box> 
      <Head>
        <title>Jeongin Yoon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.md" pt={14}>{children}</Container>
    </Box> 
  )
}
