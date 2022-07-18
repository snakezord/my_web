import NextLink from 'next/link'
import {
	Heading,
	Text,
	Container,
	Divider,
	Button, useColorMode, Center
} from '@chakra-ui/react'
import {MdKeyboardArrowRight} from "react-icons/md";

const NotFound = () => {
	const {colorMode} = useColorMode();
	return (
		<Container>
			<Heading as="h1">Not found</Heading>
			<Text>The page you&apos;re looking for was not found.</Text>
			<Divider my={6}/>
			<Center my={6}>
				<NextLink href="/" passHref>
					<Button
						boxShadow={
							`3px 3px 6px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
							`-3px -3px 6px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
						}
						bg={'secondary'} color={'black'} mt={4} rightIcon={<MdKeyboardArrowRight/>}>
						Return back
					</Button>
				</NextLink>
			</Center>
		</Container>
	)
}

export default NotFound