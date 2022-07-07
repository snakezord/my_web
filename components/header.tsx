import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import {
	HStack,
	IconButton,
	Link,
	Text,
	Spacer,
	Box,
	Container,
} from '@chakra-ui/react';
import {useColorMode} from '@chakra-ui/react';
import {GiBull} from 'react-icons/gi';
import {AiFillGithub} from 'react-icons/ai';
import {MdDarkMode} from 'react-icons/md';
import {MdLightMode} from 'react-icons/md';
import {AnimatePresence, motion} from 'framer-motion';
import {FC, ReactNode} from "react";

interface LinkI {
	children: ReactNode;
	nextProps: NextLinkProps;
	removeDecoration?: boolean;
}

//todo. Change
const LinkItem: FC<LinkI> = ({children, nextProps, removeDecoration = false}) => {
	return (
		<NextLink {...nextProps}>
			<Link style={removeDecoration ? {textDecoration: 'none'} : {}} textUnderlineOffset='5px'>
				{children}
			</Link>
		</NextLink>
	);
};

export const Header = () => {
	const {toggleColorMode, colorMode} = useColorMode();
	return (
		<Box css={{backdropFilter: 'blur(10px)'}} bg={'#FFFFFF08'} position={'fixed'} width={'100%'} zIndex={5}>
			<Container maxW={'container.lg'}>
				<HStack spacing={7}>
					<LinkItem
						nextProps={{href: '/'}}
						removeDecoration
					>
						<HStack spacing={1}>
							<motion.div whileHover='hover'>
								<HStack spacing={1} pl='2'>
									<motion.div variants={{hover: {scale: 1.3}}}>
										<GiBull size={24}/>
									</motion.div>
									<Text fontSize='lg' fontWeight='bold'>
										Roman Zhydyk
									</Text>
								</HStack>
							</motion.div>
						</HStack>
					</LinkItem>
					<HStack spacing={5}>
						<LinkItem nextProps={{href: '/works'}}>Works</LinkItem>
						<LinkItem nextProps={{href: '/posts'}}>Posts</LinkItem>
						<LinkItem nextProps={{href: '/works'}}>
							<HStack spacing={0.5}>
								<AiFillGithub/>
								<Text>Source</Text>
							</HStack>
						</LinkItem>
					</HStack>
					<Spacer/>
					<AnimatePresence exitBeforeEnter initial={false}>
						<motion.div
							style={{display: 'inline-block'}}
							key={colorMode}
							initial={{y: -20, opacity: 0}}
							animate={{y: 0, opacity: 1}}
							exit={{y: 20, opacity: 0}}
							transition={{duration: 0.2}}
						>
							<Box p={2}>
								<IconButton
									aria-label='theme mode trigger'
									onClick={toggleColorMode}
									bg={`${colorMode}.brand.400`}
								>
									{colorMode === 'light' ? (
										<MdDarkMode size={24}/>
									) : (
										<MdLightMode size={24}/>
									)}
								</IconButton>
							</Box>
						</motion.div>
					</AnimatePresence>
				</HStack>
			</Container>
		</Box>
	);
};
