import {Box, Text, chakra, Stack, VStack, useMediaQuery} from "@chakra-ui/react";
import {FC} from "react";
import Image from 'next/image';

export const ChakraImage = chakra(Image, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

export const Phrase: FC<{ text: string }> = ({text}) => {
	return (
		<Box pr={2}>
			<Text>
				{text}.
			</Text>
		</Box>
	)
}

export const Dot = () => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	// const {colorMode} = useColorMode();
	return (
		<Box
			as={'span'}
			// bg={'primary'}
			p={'1px'}
			mx={'3px'}
			// boxShadow={
			// 	`2px 2px 4px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
			// 	`-2px -2px 4px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
			// }
		>{isLargerThan600 ? '.' : <><br/></>}</Box>
	)
};

const Me: FC = () => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<Stack direction={['column', 'row']} align='center' spacing={isLargerThan600 ? 7 : 2}>
			<Box
				w={'120px'}
				h={'120px'}
				borderWidth={1} borderStyle="solid" borderColor='#ffff' borderRadius={'full'}
				boxShadow='lg'
			>
				<ChakraImage src={'/me_square.jpeg'} alt='me' borderRadius={'full'} width="120px" height="120px"/>
			</Box>
			{/*<ChakraImage src={'/me_square.jpeg'} alt='me' borderRadius={'full'} width="120px" height="120px"/>*/}
			<VStack align='flex-start' spacing={1}>
				<Text fontSize={'4xl'} fontWeight={'bold'}>Roman Zhydyk</Text>
				<Stack direction={['column', 'row']} spacing={0} fontSize={isLargerThan600 ? 'md' : 'sm'}>
					<Phrase text={'Software Engineer'}/>
					<Phrase text={'Crypto Enthusiast'}/>
					<Phrase text={'Truth Seeker'}/>
				</Stack>
			</VStack>
		</Stack>
	);
};

export default Me;