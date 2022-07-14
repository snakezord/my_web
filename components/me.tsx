import {Box, Text, chakra, Stack, VStack} from "@chakra-ui/react";
import {FC} from "react";
import Image from 'next/image';

export const ChakraImage = chakra(Image, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

export const Dot = () => {
	return (
		<Box as={'span'} bg={'primary'} p={'2px'} ml={'3px'}>.</Box>
	)
};

const Me: FC = () => {
	return (
		<Stack direction={['column', 'row']} align='center' spacing={3}>
			<Box w="80px" h="80px" borderWidth={2} borderStyle="solid" borderRadius={'full'} boxShadow='md'
					 borderColor='#ffff'>
				<ChakraImage src={'/profile.jpg'} alt='me' borderRadius={'full'} width="100%" height="100%"/>
			</Box>
			<VStack align='flex-start' spacing={1}>
				<Text fontSize={'4xl'} fontWeight={'bold'}>Roman Zhydyk</Text>
				<Text>Software Engineer<Dot/> Crypto Enthusiast<Dot/> Truth Seeker<Dot/></Text>
			</VStack>
		</Stack>
	);
};

export default Me;