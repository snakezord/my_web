import {Flex, Text, useMediaQuery} from "@chakra-ui/react";
import {Title} from "./title";
import CallToActionButton from "./callToActionButton";

const Blog = () => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<Flex direction={'column'} alignItems={'center'} gap={3}>
			<Flex direction={'column'} gap={2}>
				<Title title={'blog'}/>
				<Text fontSize={isLargerThan600 ? 'md' : 'sm'}>
          From time to time, Roman likes to write about exciting stuff. <br/>
          His interests can vary from tech to trading, economics to politics, and from workouts to diets & self-improvement.
				</Text>
			</Flex>
			<CallToActionButton text={'Latest posts'} href="/posts"/>
		</Flex>
	)
}

export default Blog