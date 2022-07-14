import {Box, GridItem, SimpleGrid} from "@chakra-ui/react";
import ContentLayout from "../components/layout/contentLayout";

const MY_POSTS = {}

const Post = () => {
	return (
		<Box>

		</Box>
	)
}

const Posts = () => {
	return (
		<ContentLayout>
			<SimpleGrid columns={3} spacing={2}>
				<GridItem border={'1px solid'}>
					post1
				</GridItem>
				<GridItem border={'1px solid'}>
					post1
				</GridItem>
				<GridItem border={'1px solid'}>
					post1
				</GridItem>
			</SimpleGrid>
		</ContentLayout>
	)
}

export default Posts;