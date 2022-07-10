import {Button, Flex, HStack, Text} from "@chakra-ui/react";
import {Dot} from "./me";
import {MdKeyboardArrowRight} from 'react-icons/md';
import {Title} from "./title";
import ReactCountryFlag from "react-country-flag"


const Work = () => {
	return (
		<Flex direction={'column'} alignItems={'center'} gap={3}>
			<Flex direction={'column'} gap={2}>
				<Title title={'whoami'}/>
				<Text>Roman is a <b>full stack developer</b> based in Portugal <ReactCountryFlag countryCode="PT"/><br/>
					Experienced with the latest cutting-edge development tools and
					procedures. Equipped with a diverse and promising skill-set. Able
					to effectively self-manage during independent projects, as well as
					collaborate as part of a productive team <Dot/></Text>
			</Flex>
			<Button bg={'secondary'} color={'black'} mt={4}>
				<HStack alignItems={'center'}>
					<Text>Roman&apos;s work</Text><MdKeyboardArrowRight/>
				</HStack>
			</Button>
		</Flex>
	)
}
export default Work;
