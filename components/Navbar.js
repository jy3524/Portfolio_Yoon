import Logo from './Logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ToggleButton from './ToggleButton';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href}>
      <Link p={2} bg={active ? 'orange' : undefined} color={active ? '#202023': inactiveColor}>
        {children}
      </Link>
    </NextLink>
  );
}

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      {...props}
    >
      <Container 
        display="flex" 
        p={2} 
        maxW="container.md" 
        wrap="wrap" 
        align="center" 
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }} 
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
          fontFamily="Gill Sans"
          fontWeight="bold"
          letterSpacing={'tight'}
        >
          <LinkItem href="/portfolio" path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
        </Stack>
        <Box flex={2} align="right">
          <Link href='https://github.com/jy3524' target='_blank'>
            <IconButton icon={<IoLogoGithub />} marginRight={2.5}/>
          </Link>
          <Link href='https://www.linkedin.com/in/masahitoyoon' target='_blank'>
            <IconButton icon={<IoLogoLinkedin />} marginRight={2.5}/>
          </Link>
          <ToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton 
                as={IconButton} 
                icon={<HamburgerIcon />} 
                variant="outline" 
                aria-label="Options" 
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem fontFamily="Gill Sans" fontWeight="bold">Home</MenuItem>
                </NextLink>
                <NextLink href="/portfolio" passHref>
                  <MenuItem fontFamily="Gill Sans" fontWeight="bold">Portfolio</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref>
                  <MenuItem fontFamily="Gill Sans" fontWeight="bold">About</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;