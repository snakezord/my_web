import {motion} from "framer-motion"
import {Box, Flex, Text} from "@chakra-ui/react";
import {FC} from "react";
import {Dot} from "./me";

const Title: FC<{ title: string }> = ({title}) => {
	return (
		<Flex direction={'column'} alignItems={'start'}>
			<Text fontSize={'lg'}>
				<Flex as={'span'} direction={'column'}>
					{title}
					<Box
						bg={'#F9248FB3'}
						h={'4px'}
						as={'span'}
					/>
				</Flex>
			</Text>
		</Flex>
	)
}

const Work = () => {
	return (
		<Flex direction={'column'} gap={2}>
			<Title title={'whoami'}/>
			<Text>Roman is a <b>full stack developer</b> based in Portugal.
				Experienced with the latest cutting-edge development tools and
				procedures. Equipped with a diverse and promising skill-set. Able
				to effectively self-manage during independent projects, as well as
				collaborate as part of a productive team <Dot/></Text>
		</Flex>
	)
}
export default Work;
