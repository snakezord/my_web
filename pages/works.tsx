import {
	Box,
	Divider,
	GridItem, Heading, SimpleGrid,
	Stack,
	Tag,
	Text,
	useColorMode, useColorModeValue, useMediaQuery,
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
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	const {colorMode} = useColorMode();
	return (
		<Stack direction={['column', 'row']} alignItems={'center'}>
			<VStack spacing={3} alignItems={'center'} p={3} position={'relative'}>
				<Box position={'absolute'} top={-1.5} right={-1.5}
				>
					{url && <SocialLink name={'website'} href={url} w='30px' h='30px'/>}
				</Box>
				<Text
					fontSize={isLargerThan600 ? 'lg' : 'md'}
					fontWeight={'bold'}
					borderRadius={'5px'}
					p={1}
					boxShadow={
						`2px 2px 4px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
						`-2px -2px 4px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
					}
				>{title}</Text>
				<Divider
					p={.7}
					boxShadow={
						`2px 2px 4px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
						`-2px -2px 4px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
					}
				/>
				<Text
					fontSize={isLargerThan600 ? 'md' : 'small'}
					borderRadius={'5px'}
					p={1}
					boxShadow={
						`2px 2px 4px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
						`-2px -2px 4px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
					}
				>{description}</Text>
				<Wrap spacing={2} w={'100%'}
							borderRadius={'5px'}
							p={2}
				>
					{
						stack.map((name, index) => (
							<WrapItem key={index}>
								<Tag fontSize={isLargerThan600 ? 'md' : 'x-small'} variant={'outline'}
										 boxShadow={
											 `1.5px 1.5px 4px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
											 `-1.5px -1.5px 4px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
										 }
										 color={colorMode === 'light' ? '#000000' : '#ffffff'}
								>
									{name}
								</Tag>
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
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<VStack spacing={2} align={'flex-start'}>
			<Heading fontSize={isLargerThan600 ? 'x-large' : 'large'}>Latest work</Heading>
			<SimpleGrid columns={[1, 2]} spacing={10}>
				{
					WORK.map((work, i) => (
						<ContentLayout key={i} delay={i * 0.2}>
							<GridItem
								p={2} pb={8}
								bg={`${colorMode}.brand.200`}
								css={{backdropFilter: 'blur(3px)'}}
								borderRadius={'10px'}
								boxShadow={
									`5px 5px 7px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
									`-5px -5px 7px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
								}
							>
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
		description: 'Helping shipping companies harness digital to add new capabilities, increase efficiencies, and reduce operational costs.',
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
		description: 'Delivering custom-built technology solutions that improve the experience quality across the guest journey.',
		stack: ['React', 'MUI', 'Google Cloud', 'Firebase', 'Mailgun', 'more'],
		images: [
			'/images/nomadix_cover.jpeg',
			'/images/nomadix_dashboard.png',
			'/images/nomadix_ui_design.jpeg',
		],
		url: 'https://spicefactory.co/work/hospitality/'
	},
]