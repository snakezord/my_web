import {Box, Container, Grid, GridItem, Spacer, Spinner, useColorMode} from "@chakra-ui/react";
import {FC, PropsWithChildren} from "react";
import dynamic from "next/dynamic";
import {Header} from "../header";
import Seo from "../seo";
import {useMediaQuery} from '@chakra-ui/react'
import Footer from "../footer";

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
			colEnd: 9
		}
		: {
			colStart: 2,
			colEnd: 12
		};
	const posPropsGrid2 = isLargerThan1280
		? {
			colStart: 9,
			colEnd: 12,
			h: '70vh'
		}
		: {
			colStart: 2,
			colEnd: 12,
			gridRow: 1,
			h: '300px'
		};

	return (
		<Box w='100%' minH='100vh' h='100%' bg={`${colorMode}.brand.100`}>
			<Seo/>
			<Header/>
			<Grid templateColumns={'repeat(12, 1fr)'} pt={'5%'}>
				<GridItem {...posPropsGrid1} pt={'5%'}>
					<Container maxW={'container.md'}>
						{children}
					</Container>
				</GridItem>
				<GridItem
					{...posPropsGrid2} w='100%'
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