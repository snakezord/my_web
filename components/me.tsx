import {Box, Flex, Text, chakra} from "@chakra-ui/react";
import {FC} from "react";
import Image from 'next/image';

const ProfileImage = chakra(Image, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

export const Dot = () => {
	return (
		<Box as={'span'} bg={'primary'} p={'4px'} ml={'2px'}>.</Box>
	)
};

const Me: FC = () => {
	return (
		<Box>
			<Flex align='flex-start'>
				<Box w="80px" h="80px" borderWidth={2} borderStyle="solid" borderRadius={'full'} boxShadow='md'
						 borderColor='#ffff'>
					<ProfileImage src={'/profile.jpg'} alt='me' borderRadius={'full'} width="100%"
												height="100%"/>
				</Box>
				<Box ml={10}>
					<Text fontSize={'4xl'}>Roman Zhydyk</Text>
					<Text>Software Engineer<Dot/> Crypto Enthusiast<Dot/> Truth Seeker<Dot/></Text>
				</Box>
			</Flex>
		</Box>
	);
};

export default Me;