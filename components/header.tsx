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
import {AiFillGithub} from 'react-icons/ai';
import {MdDarkMode} from 'react-icons/md';
import {MdLightMode} from 'react-icons/md';
import {AnimatePresence, motion} from 'framer-motion';
import {FC, ReactNode} from "react";

interface LinkI extends NextLinkProps {
	children: ReactNode;
	removeDecoration?: boolean;
}

export const LinkItem: FC<LinkI> = ({children, removeDecoration = false, ...nextProps}) => {
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
		<Container maxW={'container.lg'}>
			<HStack spacing={7}>
				<LinkItem
					href={'/'}
					removeDecoration
				>
					<HStack spacing={1}>
						<motion.div whileHover='hover'>
							<Text fontSize='lg' fontWeight='bold'>
								Roman Zhydyk
							</Text>
						</motion.div>
					</HStack>
				</LinkItem>
				<HStack spacing={5}>
					<LinkItem href={'/work'}>Works</LinkItem>
					<LinkItem href={''}>Posts</LinkItem>
					<LinkItem href={''}>
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
	);
};
