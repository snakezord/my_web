import {Box, Flex, Text, chakra, useColorMode} from "@chakra-ui/react";
import {FC} from "react";
import Image from 'next/image';

const ProfileImage = chakra(Image, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

export const Dot = () => {
	const {colorMode} = useColorMode();
	return (
		<Box as={'span'} bg={`${colorMode}.brand.500`} p={'4px'} ml={'2px'}>.</Box>
	)
};

const Me: FC = () => {
	return (
		<>
			<Flex justify={'center'} mb={'20px'} bg={'whiteAlpha.100'} css={{backdropFilter: 'blur(10px)'}} borderRadius='5px'
						p={2}>
				<Text fontSize='md'>Hello, I&apos;m a Software Engineer based in Portugal</Text>
			</Flex>
			<Flex align='center'>
				<Box w="80px" h="80px" borderWidth={2} borderStyle="solid" borderRadius={'full'} borderColor='#ffff'>
					<ProfileImage src={'/profile.jpg'} alt='me' borderRadius={'full'} width="100%" height="100%"/>
				</Box>
				<Box ml={10}>
					<Text fontSize={'4xl'}>Roman Zhydyk</Text>
					<Text>Software Engineer<Dot/> Crypto Enthusiast<Dot/> Truth Seeker<Dot/></Text>
				</Box>
			</Flex>
		</>
	);
};

export default Me;