import {Box, Container, Grid, GridItem, Spacer, Spinner, useColorMode} from "@chakra-ui/react";
import {FC, PropsWithChildren} from "react";
import dynamic from "next/dynamic";
import {Header} from "../header";
import {useMediaQuery} from '@chakra-ui/react'
import Footer from "../footer";
import NextNProgress from "nextjs-progressbar";
import {useGLTF} from "@react-three/drei";
import ScrollDownSvg from "../scrollDownSvg";
import Head from "next/head";

useGLTF.preload('/scene.glb')

const Scene = dynamic(() => import('../scene'), {
	ssr: false,
	loading: () => {
		return <Spinner w={'64px'} h={'64px'} emptyColor='#F9248FB3'/>
	}
});

const Layout: FC<PropsWithChildren> = ({children}) => {
	const {colorMode} = useColorMode();
	const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

	const posPropsGrid1 = isLargerThan1280
		? {
			colStart: 3,
			colEnd: 8
		}
		: {
			colStart: 1,
			colEnd: 13
		};
	const posPropsGrid2 = isLargerThan1280
		? {
			colStart: 8,
			colEnd: 11,
			h: '70vh',
			position: 'fixed',
			right: '120px',
			top: '120px',
			w: '50%',
		}
		: {
			colStart: 2,
			colEnd: 12,
			gridRow: 1,
			h: '300px'
		};

	return (
		<Box w='100%' minH='100vh' h='100%' bg={`${colorMode}.brand.100`}>
			<Head>
				<link rel='icon' href='/favicon.ico'/>
			</Head>
			<Header/>
			<NextNProgress height={3} color={'#F9248FB3'}/>
			<ScrollDownSvg/>
			<Grid templateColumns={'repeat(12, 1fr)'} py={'5%'}>
				<GridItem
					{...posPropsGrid1}
					pt={'5%'}
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
					css={{cursor: 'grab'}}
					zIndex={0}
				>
					<Scene/>
				</GridItem>
			</Grid>
			<Spacer/>
			<Footer/>
		</Box>
	)
}

export default Layout;