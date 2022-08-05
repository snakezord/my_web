import NextLink from 'next/link'
import {
	Heading,
	Text,
	Container,
	Divider,
	Center
} from '@chakra-ui/react'
import CallToActionButton from "../components/callToActionButton";

const NotFound = () => {
	return (
		<Container>
			<Heading as="h1">Not found</Heading>
			<Text>The page you&apos;re looking for was not found.</Text>
			<Divider my={6}/>
			<Center my={6}>
				<NextLink href="/" passHref>
					<CallToActionButton text={'Return back'} href={'/'}/>
				</NextLink>
			</Center>
		</Container>
	)
}

export default NotFound