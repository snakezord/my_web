import {Flex, Text, useMediaQuery} from "@chakra-ui/react";
import {Title} from "./title";
import ReactCountryFlag from "react-country-flag"
import CallToActionButton from "./callToActionButton";

const Whoami = () => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<Flex direction={'column'} alignItems={'center'} gap={3}>
			<Flex direction={'column'} gap={2}>
        <Title title={'whoami'} />
				<Text fontSize={isLargerThan600 ? 'md' : 'sm'}>
          <b>High-performance</b> full-stack software engineer with an entrepreneurial mindset. <br/>
          <b>Experienced</b> with the latest cutting-edge development tools and procedures. <br/>
          <b>Equipped</b> with a diverse and promising skill set. <br/>
          <b>Able</b> to effectively self-manage during independent projects and collaborate as part of a productive team. <br/>
          <b>Looking for promising start-ups. </b><br/>
          <b>Always learning.</b>
        </Text>
			</Flex>
			<CallToActionButton text={'Latest work'} href="/works"/>
		</Flex>
	)
}
export default Whoami;
