import {
	Box,
	Divider,
	GridItem, Heading, SimpleGrid,
	Stack,
	Tag,
	Text,
	useColorMode,
	VStack, Wrap, WrapItem
} from "@chakra-ui/react";
import ContentLayout from "../components/layout/contentLayout";
import {FC} from "react";
import Slider from "../components/slider";
import {SocialLink} from "../components/social";

interface WorkProps {
	title: string;
	description: string;
	stack: string[];
	images: string[];
	url?: string;
}

const Work: FC<WorkProps> = ({title, description, stack, images, url}) => {
	return (
		<Stack direction={['column', 'row']} alignItems={'center'}>
			<VStack spacing={3} alignItems={'center'} p={3} position={'relative'}>
				<Box position={'absolute'} top={0} right={0}>
					{url && <SocialLink name={'website'} href={url} w='30px' h='30px'/>}
				</Box>
				<Text fontSize={'md'} fontWeight={'bold'}>{title}</Text>
				<Divider/>
				<Text>{description}</Text>
				<Wrap spacing={1} w={'100%'}>
					{
						stack.map((name, index) => (
							<WrapItem key={index}>
								<Tag>{name}</Tag>
							</WrapItem>
						))
					}
				</Wrap>
				<Slider images={images}/>
			</VStack>
		</Stack>
	)
}

const Works = () => {
	const {colorMode} = useColorMode();
	return (
		<VStack spacing={2} align={'flex-start'}>
			<Heading>Latest work</Heading>
			<SimpleGrid columns={[1, 2]} spacing={10}>
				{
					WORK.map((work, i) => (
						<ContentLayout key={i} delay={i * 0.2}>
							<GridItem p={2} pb={8} bg={`${colorMode}.brand.200`} borderRadius={'10px'}>
								<Work {...work}/>
							</GridItem>
						</ContentLayout>
					))
				}
			</SimpleGrid>
		</VStack>
	)
}

export default Works;

const WORK: WorkProps[] = [
	{
		title: 'Complete Digitalization of Core Shipping Operations',
		description: 'Helping shipping companies harness digital to add new capabilities, increase efficiencies, and reduce operational costs',
		stack: ['React', 'MUI', 'Google Cloud', 'Firebase', 'Mailgun', 'more'],
		images: [
			'/images/transportation_home.jpeg',
			'/images/transportation_quotes_list.jpeg',
			'/images/transportation_task_management.jpeg',
			'/images/transportation_my_day.jpeg',
		],
		url: 'https://spicefactory.co/work/transportation/'
	},
	{
		title: 'Powering Contactless Guest Experiences at Scale',
		description: 'Delivering custom-built technology solutions that improve the experience quality across the guest journey',
		stack: ['React', 'MUI', 'Google Cloud', 'Firebase', 'Mailgun', 'more'],
		images: [
			'/images/nomadix_cover.jpeg',
			'/images/nomadix_dashboard.png',
			'/images/nomadix_ui_design.jpeg',
		],
		url: 'https://spicefactory.co/work/hospitality/'
	},
]