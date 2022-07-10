import {Box, Container, Grid, GridItem, Spinner, useColorMode} from "@chakra-ui/react";
import {FC, PropsWithChildren} from "react";
import dynamic from "next/dynamic";
import {Header} from "./header";
import Seo from "./seo";
import {useMediaQuery} from '@chakra-ui/react'

const Scene = dynamic(() => import('../components/scene'), {
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
			h: '400px'
		}
		: {
			colStart: 2,
			colEnd: 12,
			gridRow: 1,
			h: '150px'
		};

	return (
		<Box w='100vw' h='100vh' bg={`${colorMode}.brand.100`}>
			<Seo/>
			<Header/>
			<Grid templateColumns={'repeat(12, 1fr)'} pt={'40px'}>
				<GridItem {...posPropsGrid1} border={'1px solid red'}>
					<Container maxW={'container.sm'}>
						{children}
					</Container>
				</GridItem>
				<GridItem
					{...posPropsGrid2} w='100%'
					display={'flex'} alignItems={'center'} justifyContent={'center'}
					border={'1px solid yellow'}
					css={{cursor: 'grab'}}>
					<Scene/>
				</GridItem>
			</Grid>
		</Box>
	)
}

export default Layout;