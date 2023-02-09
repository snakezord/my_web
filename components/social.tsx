import {Box, Flex, HStack, Link, Tooltip, useColorMode} from "@chakra-ui/react";
import {Title} from "./title";
import {
	FaGithub,
	FaLinkedinIn,
	FaTwitter,
	FaExternalLinkAlt
} from "react-icons/fa";
import {FcDocument} from "react-icons/fc";
import {IconType} from "react-icons";
import {FC} from "react";

type SocialLinks = 'github' | 'linkedIn' | 'twitter' | 'resume' | 'website' | string;
type NameToIcon = {
	[key in SocialLinks]: IconType;
}

const SocialIcon: NameToIcon = {
	github: FaGithub,
	linkedIn: FaLinkedinIn,
	twitter: FaTwitter,
	resume: FcDocument,
	website: FaExternalLinkAlt
}

interface SocialLinkProps {
	name: SocialLinks
	href: string
	icon?: IconType
	w?: string
	h?: string
}

export const SocialLink: FC<SocialLinkProps> = (
	{
		name,
		href,
		icon,
		w = '35px',
		h = '35px'
  }) => {
  const { colorMode } = useColorMode();
	const Icon = SocialIcon[name] || icon;
	return (
		<Link href={href} target={'_blank'} rel="noreferrer">
			<Tooltip label={name} hasArrow placement="top" bg={`hover.${colorMode === 'dark' ? 'light' : 'dark'}`} color={colorMode === 'dark' ? 'black' : 'white'}>
				<Box w={w} h={h} borderRadius={'100%'} p={1} _hover={{color: `hover.${colorMode === 'dark' ? 'light' : 'dark'}`}}>
					<Icon size={'100%'}/>
				</Box>
			</Tooltip>
		</Link>
	)
}

const SocialLinks = () => {
	return (
		<HStack spacing={.5}>
			<SocialLink name={'github'} href={'https://github.com/snakezord'}/>
			<SocialLink name={'linkedIn'} href={'https://www.linkedin.com/in/roman-zhydyk-5a3374203'}/>
			<SocialLink name={'twitter'} href={'https://twitter.com/2_comma_club'}/>
		</HStack>
	)
}

export const Social = () => {
	return (
		<Flex direction={'column'} >
			{/* <Title title={'Connect'}/> */}
			<SocialLinks/>
		</Flex>
	)
}