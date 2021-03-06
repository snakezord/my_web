import {
	Box,
	Divider,
	GridItem, Heading, HStack, List, ListIcon, ListItem, SimpleGrid,
	Stack,
	Tag,
	Text,
	useColorMode, useMediaQuery,
	VStack, Wrap, WrapItem
} from "@chakra-ui/react";
import ContentLayout from "../components/layout/contentLayout";
import {FC} from "react";
import Slider from "../components/slider";
import {SocialLink} from "../components/social";
import {GoPrimitiveDot} from "react-icons/go";


interface WorkProps {
	title: string;
	description: string;
	achievements: string[];
	stack: string[];
	images: string[];
	url?: string;
}


const Description: FC<{ description: string }> = ({description}) => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	const {colorMode} = useColorMode();
	return (
		<VStack
			align={'flex-start'}
			borderRadius={'5px'}
			p={2}
			boxShadow={
				`2px 2px 4px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
				`-2px -2px 4px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
			}
		>
			<Text
				fontWeight={'bold'}
				fontSize={isLargerThan600 ? 'md' : 'sm'}
			>Description</Text>
			<Text
				fontSize={isLargerThan600 ? 'sm' : 'x-small'}
			>
				{description}
			</Text>
		</VStack>
	)
}

const Achievements: FC<{ achievements: string[] }> = ({achievements}) => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	const {colorMode} = useColorMode();
	return (
		<VStack
			align={'flex-start'}
			borderRadius={'5px'}
			p={2}
			boxShadow={
				`2px 2px 4px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
				`-2px -2px 4px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
			}
		>
			<Text
				fontWeight={'bold'}
				fontSize={isLargerThan600 ? 'md' : 'sm'}
			>Achievements</Text>
			<List fontSize={isLargerThan600 ? 'sm' : 'x-small'}>
				{
					achievements.map((achievement, i) => (
						<ListItem key={i}>
							<ListIcon
								as={GoPrimitiveDot}
								borderRadius={'100%'}
							/>
							{achievement}
						</ListItem>
					))
				}
			</List>
		</VStack>
	)
}

const UsedStack: FC<{ stack: string[] }> = ({stack}) => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	const {colorMode} = useColorMode();
	return (
		<VStack
			align={'flex-start'}
			borderRadius={'5px'}
			pt={2}
			px={2}
			boxShadow={
				`2px 2px 4px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
				`-2px -2px 4px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
			}
		>
			<Text
				fontWeight={'bold'}
				fontSize={isLargerThan600 ? 'md' : 'sm'}
			>Stack</Text>
			<Wrap
				spacing={2}
				w={'100%'}
				pb={2}
				px={.5}
			>
				{
					stack.map((name, index) => (
						<WrapItem key={index}>
							<Tag
								fontSize={isLargerThan600 ? 'sm' : 'xx-small'} variant={'outline'}
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
		</VStack>
	)
}

const Work: FC<WorkProps> = ({title, description, stack, images, url, achievements}) => {
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	const {colorMode} = useColorMode();
	return (
		<VStack spacing={3} alignItems={'stretch'} p={3} position={'relative'}>
			<HStack
				align={'center'}
				justifyContent={'space-between'}
				borderRadius={'5px'}
				p={2}
				boxShadow={
					`2px 2px 4px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
					`-2px -2px 4px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
				}
			>
				<Text
					fontSize={isLargerThan600 ? 'lg' : 'sm'}
					fontWeight={'bold'}
				>{title}</Text>
				<Box>
					{url && <SocialLink name={'website'} href={url} w='32px' h='32px'/>}
				</Box>
			</HStack>
			<Divider
				p={.7}
				boxShadow={
					`2px 2px 4px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
					`-2px -2px 4px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
				}
			/>
			<Description description={description}/>
			<Stack direction={['column-reverse', 'row']} spacing={3} align={'flex-start'}>
				<Box w={isLargerThan600 ? '50%' : '100%'}>
					<Slider images={images}/>
				</Box>
				<Achievements achievements={achievements}/>
			</Stack>
			<UsedStack stack={stack}/>
		</VStack>
	)
}

const Works = () => {
	const {colorMode} = useColorMode();
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
	return (
		<VStack spacing={5} align={'flex-start'}>
			<Heading fontSize={isLargerThan600 ? 'x-large' : 'large'}>Latest work</Heading>
			<SimpleGrid columns={1} spacing={8}>
				{
					WORK.map((work, i) => (
						<ContentLayout key={i} delay={i * 0.2}>
							<GridItem
								p={2}
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
		title: 'Complete digitalization of core shipping operations',
		description: 'Helping shipping companies harness digital to add new capabilities, increase efficiencies, and reduce operational costs',
		achievements: [
			'Saved 10x the time it took for the booking to be processed',
			'Automated emailing and quote generation',
			'Automated extensive document fillings',
			'Created a better experience for customers and employees'
		],
		stack: ['TS', 'React', 'MUI', 'Google Cloud', 'Firebase', 'Express', 'Mailgun'],
		images: [
			'/images/transportation_home.jpeg',
			'/images/transportation_quotes_list.jpeg',
			'/images/transportation_task_management.jpeg',
			'/images/transportation_my_day.jpeg',
		],
		url: 'https://spicefactory.co/work/transportation/'
	},
	{
		title: 'Powering contactless guest experiences at scale',
		description: 'Delivering custom-built technology solutions that improve the experience quality across the guest journey',
		achievements: [
			'Enabled dynamic display of a single or multi-property view',
			'Enabled property management to create and edit properties',
			'Enabled service management to create and edit amenities and services',
			'Created roles & permissions system',
		],
		stack: ['TS', 'React', 'MUI', 'Google Cloud', 'Firebase', 'Mailgun'],
		images: [
			'/images/nomadix_cover.jpeg',
			'/images/nomadix_dashboard.png',
			'/images/nomadix_ui_design.jpeg',
		],
		url: 'https://spicefactory.co/work/hospitality/'
	},
]