import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Box as="main" pb={8}>
        <Head>
          <title>Jeongin Yoon</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Box>
      <Box>
        Hello
      </Box>
    </Container>
  )
}
