import {Heading, SimpleGrid, useMediaQuery, VStack} from "@chakra-ui/react";
import {FC, PropsWithChildren} from "react";

const ContentLayout: FC<{ title: string } & PropsWithChildren> = ({children, title}) => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<VStack spacing={5} align={'flex-start'}>
			<Heading fontSize={isLargerThan600 ? 'x-large' : 'large'}>{title}</Heading>
			<SimpleGrid
				columns={1}
				spacing={8}
				h={'100%'}
				p={'5px'}
				borderRadius={'10px'}
			>
				{children}
			</SimpleGrid>
		</VStack>
	)
}

export default ContentLayout