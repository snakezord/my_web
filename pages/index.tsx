import type {NextPage} from 'next';
import {useMediaQuery, VStack} from '@chakra-ui/react';
import Me from '../components/me';
import Whoamai from "../components/whoamai";
import {Social} from "../components/social";
import ContentLayout from "../components/layout/contentLayout";

const Home: NextPage = () => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<VStack spacing={isLargerThan600 ? 10 : 3} align={'flex-start'}>
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