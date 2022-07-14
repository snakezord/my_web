import {FC} from "react";
import {Box, Flex, Text} from "@chakra-ui/react";

export const Title: FC<{ title: string }> = ({title}) => {
	return (
		<Flex direction={'column'} alignItems={'start'}>
			<Text fontSize={'larger'} fontWeight={'bold'}>
				<Flex as={'span'} direction={'column'}>
					{title}
					<Box
						bg={'primary'}
						h={'4px'}
						as={'span'}
					/>
				</Flex>
			</Text>
		</Flex>
	)
}