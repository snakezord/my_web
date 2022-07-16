import {Box, Text, chakra, Stack, VStack, useMediaQuery} from "@chakra-ui/react";
import {FC} from "react";
import Image from 'next/image';

export const ChakraImage = chakra(Image, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

export const Dot = () => {
	return (
		<Box as={'span'} bg={'primary'} p={'2px'} mx={'3px'}>.</Box>
	)
};

const Me: FC = () => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<Stack direction={['column', 'row']} align='center' spacing={isLargerThan600 ? 7 : 2}>
			<Box w="100px" h="100px"
					 borderWidth={1} borderStyle="solid" borderColor='#ffff' borderRadius={'full'}
					 boxShadow='lg'
			>
				<ChakraImage src={'/me_square.jpeg'} alt='me' borderRadius={'full'} width="100%" height="100%"/>
			</Box>
			<VStack align='flex-start' spacing={1}>
				<Text fontSize={'4xl'} fontWeight={'bold'}>Roman Zhydyk</Text>
				<Text fontSize={isLargerThan600 ? 'initial' : 'x-small'}>
					Software Engineer<Dot/>
					Crypto Enthusiast<Dot/>
					Truth Seeker
				</Text>
			</VStack>
		</Stack>
	);
};

export default Me;