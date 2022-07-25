import {Box, useColorModeValue, useMediaQuery, Text} from "@chakra-ui/react";

const Footer = () => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<Box
			bottom={0}
			position={isLargerThan600 ? 'fixed' : 'initial'}
			zIndex={5}
			p={3}
			pt={4}
			bg={useColorModeValue('#F0ECE240', '#022C4380')}
			css={{backdropFilter: 'blur(3px)'}}
		>
			<Text fontSize={isLargerThan600 ? 'md' : 'small'}><Box as={'span'} bg={'primary'}>By</Box> Roman Zhydyk
				2022</Text>
		</Box>
	)
}

export default Footer;