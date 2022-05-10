import NextLink from 'next/link';
import { Heading, Box, Image, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Title = ({ children }) => (
  <Box fontFamily="Gill Sans">
    <NextLink href="/portfolio">
      <Link>Portfolio</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading fontFamily="Gill Sans" display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const PortfolioImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mt={4} mb={4}/>
)