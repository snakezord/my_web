import {Button, Flex, Text} from "@chakra-ui/react";
import {Dot} from "./me";
import {MdKeyboardArrowRight} from 'react-icons/md';
import {Title} from "./title";
import ReactCountryFlag from "react-country-flag"
import NextLink from "next/link";

const Whoamai = () => {
	return (
		<Flex direction={'column'} alignItems={'center'} gap={3}>
			<Flex direction={'column'} gap={2}>
				<Title title={'whoami'}/>
				<Text>Roman is a <b>software engineer</b> based in Portugal <ReactCountryFlag countryCode="PT"/>.<br/>
					<b>Experienced</b> with the latest cutting-edge development tools and
					procedures. <br/><b>Equipped</b> with a diverse and promising skill-set. <br/><b>Able </b>
					to effectively self-manage during independent projects, as well as
					collaborate as part of a productive team <Dot/></Text>
			</Flex>
			<NextLink href="/works" passHref scroll={false}>
				<Button bg={'secondary'} color={'black'} mt={4} rightIcon={<MdKeyboardArrowRight/>}>
					Latest work
				</Button>
			</NextLink>
		</Flex>
	)
}
export default Whoamai;
