import {Button, Flex, Text, useColorMode, useMediaQuery} from "@chakra-ui/react";
import {MdKeyboardArrowRight} from 'react-icons/md';
import {Title} from "./title";
import ReactCountryFlag from "react-country-flag"
import NextLink from "next/link";

const Whoamai = () => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	const {colorMode} = useColorMode();
	return (
		<Flex direction={'column'} alignItems={'center'} gap={3}>
			<Flex direction={'column'} gap={2}>
				<Title title={'whoami'}/>
				<Text fontSize={isLargerThan600 ? 'md' : 'sm'}>Roman is a <b>software engineer</b> based in
					Portugal <ReactCountryFlag countryCode="PT"/>.<br/>
					<b>Experienced</b> with the latest cutting-edge development tools and
					procedures. <br/><b>Equipped</b> with a diverse and promising skill-set. <br/><b>Able </b>
					to effectively self-manage during independent projects, as well as
					collaborate as part of a productive team.</Text>
			</Flex>
			<NextLink href="/works" passHref>
				<Button
					boxShadow={
						`3px 3px 6px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
						`-3px -3px 6px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
					}
					bg={'secondary'} color={'black'} mt={4} rightIcon={<MdKeyboardArrowRight/>}>
					Latest work
				</Button>
			</NextLink>
		</Flex>
	)
}
export default Whoamai;
