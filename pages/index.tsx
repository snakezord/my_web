import type {NextPage} from 'next';
import {VStack} from '@chakra-ui/react';
import Me from '../components/me';
import Whoamai from "../components/whoamai";
import {Social} from "../components/social";
import ContentLayout from "../components/layout/contentLayout";

const Home: NextPage = () => {
	return (
		<VStack spacing={10} align={'flex-start'}>
			<ContentLayout>
				<Me/>
			</ContentLayout>
			<ContentLayout delay={0.2}>
				<Whoamai/>
			</ContentLayout>
			<ContentLayout delay={0.4}>
				<Social/>
			</ContentLayout>
		</VStack>
	);
};

export default Home;