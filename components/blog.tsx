import {Flex, Text, useMediaQuery} from "@chakra-ui/react";
import {Title} from "./title";
import CallToActionButton from "./callToActionButton";

const Blog = () => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<Flex direction={'column'} alignItems={'center'} gap={3}>
			<Flex direction={'column'} gap={2} alignSelf={'flex-start'}>
				<Title title={'Blog'}/>
				<Text fontSize={'sm'}>
        Occasionally, I indulge in crafting insightful pieces on a diverse range of subjects, encompassing the spheres of technology, finance, economics, politics, health and wellness, and personal development.
				</Text>
			</Flex>
			<CallToActionButton text={'Latest posts'} href="/posts"/>
		</Flex>
	)
}

export default Blog