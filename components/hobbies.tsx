import {VStack, useMediaQuery, Stack} from "@chakra-ui/react";
import {Title} from "./title";
import {Phrase} from "./me";

const Hobbies = () => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<VStack spacing={2} align={'flex-start'}>
			<Title title={'hobbies'}/>
			<Stack direction={['column', 'row']} spacing={0} fontSize={isLargerThan600 ? 'md' : 'sm'}>
				<Phrase text={'Working out 🏋'}/>
				<Phrase text={'Crypto ₿'}/>
				<Phrase text={'Entrepreneurship 💸'}/>
			</Stack>
		</VStack>
	)
}

export default Hobbies;