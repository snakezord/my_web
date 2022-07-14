import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import {
	HStack,
	Link,
	Text,
	Spacer,
	Container,
} from '@chakra-ui/react';
import {AiFillGithub} from 'react-icons/ai';
import {FC, ReactNode} from "react";
import ThemeButton from "./themeButton";
import {motion} from 'framer-motion';

interface LinkI extends NextLinkProps {
	children: ReactNode;
	target?: "_self" | "_blank" | "_parent" | "_top" | string;
	removeDecoration?: boolean;
}

const LinkItem: FC<LinkI> = ({children, removeDecoration = false, target = '_self', ...nextProps}) => {
	return (
		<NextLink {...nextProps} passHref={true} scroll={false}>
			<Link
				style={{textDecoration: 'none'}}
				textUnderlineOffset='5px'
				className={'hover-underline-animation'}
				target={target}
				rel="noreferrer"
			>
				{children}
			</Link>
		</NextLink>
	);
};

export const Header = () => {
	return (
		<Container maxW={'container.lg'} p={4}>
			<HStack spacing={3}>
				<motion.div
					whileHover={{
						scale: 1.03,
						transition: {duration: .1},
					}}
				>
					<LinkItem
						href={'/'}
						removeDecoration
					>
						<Text fontSize='lg' fontWeight='bold'>
							Roman Zhydyk
						</Text>
					</LinkItem>
				</motion.div>
				<HStack spacing={5}>
					<LinkItem href={'/works'}>Works</LinkItem>
					<LinkItem href={'/posts'}>Posts</LinkItem>
					<LinkItem
						href={'https://github.com/snakezord/my_web'}
						target={'_blank'}
					>
						<HStack spacing={0.5}>
							<AiFillGithub/>
							<Text>Source</Text>
						</HStack>
					</LinkItem>
				</HStack>
				<Spacer/>
				<ThemeButton/>
			</HStack>
		</Container>
	);
};
