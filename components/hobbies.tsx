import {VStack, Text, useMediaQuery} from "@chakra-ui/react";
import {Title} from "./title";
import {Dot} from "./me";

const Hobbies = () => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<VStack spacing={2} align={'flex-start'}>
			<Title title={'hobbies'}/>
			<Text fontSize={isLargerThan600 ? 'initial' : 'x-small'}>Working out 🏋<Dot/>Crypto ₿<Dot/>Entrepreneurship
				💸</Text>
		</VStack>
	)
}

export default Hobbies;