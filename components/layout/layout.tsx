import { Box, Container, Grid, GridItem, Spacer, Spinner, useColorMode, useTheme } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import { Header } from "../header";
import { useMediaQuery } from '@chakra-ui/react';
import Footer from "../footer";
import NextNProgress from "nextjs-progressbar";
import { useGLTF } from "@react-three/drei";
import ScrollDownSvg from "../scrollDownSvg";
import Head from "next/head";

useGLTF.preload('/scene.glb');

const Scene = dynamic(() => import('../scene'), {
  ssr: false,
  loading: () => {
    return <Spinner w={'64px'} h={'64px'} emptyColor='#F9248FB3' />;
  }
});

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { colorMode } = useColorMode();
  const theme = useTheme()
  const [isSmallerThan1280] = useMediaQuery('(max-width: 1280px)');

  const posPropsGrid1 = isSmallerThan1280
    ? {
      colStart: 1,
      colEnd: 13
    }
    : {
      colStart: 3,
      colEnd: 8
    };
  const posPropsGrid2 = isSmallerThan1280
    ? {
      colStart: 2,
      colEnd: 12,
      gridRow: 1,
      h: '300px'
    }
    : {
      colStart: 8,
      colEnd: 12,
      h: '55vh',
      position: 'fixed',
      right: '20px',
      top: '120px',
      mr: '200px',
      w: '30%',
    };
  
  const color1 = theme['colors'][colorMode]['brand'][100]
  const color2 = colorMode === 'light' ? '#f6f6f6' : '#2e3546'

  return (
    <Box
      sx={{
        backgroundColor: '#EDE8E4',
        opacity: 1,
        backgroundImage: `repeating-linear-gradient( 45deg, ${color2}, ${color2} 2px, ${color1} 2px, ${color1} 10px )`
      }}
      w='100%' minH='100vh' h='100%' bg={`${colorMode}.brand.100`}
    >
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <NextNProgress height={3} color={'#F9248FB3'} />
      <ScrollDownSvg />
      <Grid templateColumns={'repeat(12, 1fr)'} pt={'5%'} pb={'2%'}>
        <GridItem
          {...posPropsGrid1}
          pt={'2%'}
          zIndex={1}
        >
          <Container maxW={'container.md'}>
            {children}
          </Container>
        </GridItem>
        {/*@ts-ignore*/}
        <GridItem
          {...posPropsGrid2}
          display={'flex'} alignItems={'center'} justifyContent={'center'}
          css={{ cursor: 'grab' }}
          zIndex={0}
        >
          <Scene />
        </GridItem>
      </Grid>
      <Spacer />
      <Footer />
    </Box>
  );
};

export default Layout;