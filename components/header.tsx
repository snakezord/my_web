import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import {
  HStack,
  Link,
  Text,
  Spacer,
  Container, Menu, MenuButton, IconButton, MenuList, MenuItem, Box, Flex, useColorModeValue, useColorMode,
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { FC, ReactNode, useState } from "react";
import ThemeButton from "./themeButton";
import { motion } from 'framer-motion';
import { useRouter } from "next/router";
import Hamburger from 'hamburger-react';
import { Show, Hide } from '@chakra-ui/react';

interface LinkI extends NextLinkProps {
  children: ReactNode;
  target?: "_self" | "_blank" | "_parent" | "_top" | string;
  removeDecoration?: boolean;
}

const LinkItem: FC<LinkI> = ({ children, removeDecoration = false, target = '_self', ...nextProps }) => {
  const { href } = nextProps;
  const router = useRouter();

  return (
    <NextLink {...nextProps} passHref={true}>
      <Link
        w={'100%'}
        style={{ textDecoration: 'none' }}
        fontSize={'md'}
        textUnderlineOffset='5px'
        className={`hover-underline-animation ${(router.asPath === href && href !== '/') && 'active'}`}
        target={target}
        rel="noreferrer"
      >
        {children}
      </Link>
    </NextLink>
  );
};


// @ts-ignore
const ComplexButton = () => <MenuButton as={IconButton} />; //Fucking TS

const MediaMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Show below='md'>
        <Spacer />
        <Menu isOpen={openMenu} onOpen={() => setOpenMenu(true)} onClose={() => setOpenMenu(false)}>
          <MenuButton
            as={IconButton}
            icon={<Hamburger toggled={openMenu} />}
            variant='outline'
          />
          <MenuList>
            <MenuItem>
              <LinkItem href={'/works'}>Works</LinkItem>
            </MenuItem>
            <MenuItem>
              <LinkItem href={'/posts'}>Posts</LinkItem>
            </MenuItem>
            <MenuItem>
              <LinkItem
                href={'https://github.com/snakezord/my_web'}
                target={'_blank'}
              >
                <HStack spacing={0.5}>
                  <AiFillGithub />
                  <Text>Source</Text>
                </HStack>
              </LinkItem>
            </MenuItem>
          </MenuList>
        </Menu>
      </Show>
      <Hide below='md'>
        <HStack spacing={5} pl={3}>
          <LinkItem href={'/works'}>Works</LinkItem>
          <LinkItem href={'/posts'}>Posts</LinkItem>
          <LinkItem
            href={'https://github.com/snakezord/my_web'}
            target={'_blank'}
          >
            <HStack spacing={0.5}>
              <AiFillGithub />
              <Text>Source</Text>
            </HStack>
          </LinkItem>
        </HStack>
      </Hide>
    </>
  );
};

export const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      w="100%"
      position={'fixed'}
      zIndex={5}
      p={3}
      css={{ backdropFilter: 'blur(3px)' }}
    >
      <Container maxW={'container.lg'}>
        <HStack>
          <HStack>
            <motion.div
              whileHover={{
                scale: 1.03,
                transition: { duration: .1 },
              }}
            >
              <LinkItem
                href={'/'}
                removeDecoration
              >
                <Text fontSize='md' fontWeight='bold'>
                  Roman Zhydyk
                </Text>
              </LinkItem>
            </motion.div>
            <MediaMenu />
          </HStack>
          <Spacer />
          <ThemeButton />
        </HStack>
      </Container>
    </Box>
  );
};
