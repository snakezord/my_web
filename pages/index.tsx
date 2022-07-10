import type {NextPage} from 'next';
import {Flex} from '@chakra-ui/react';
import Me from '../components/me';
import Work from "../components/work";
import {Social} from "../components/social";

const Home: NextPage = () => {
	return (
		<Flex direction={'column'} gap={10} pt={10}>
			<Me/>
			<Work/>
			<Social/>
		</Flex>
	);
};

export default Home;