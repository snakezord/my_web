import {Box, Flex, HStack, Tooltip} from "@chakra-ui/react";
import {Title} from "./title";
import {
	FaGithub,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import {FcDocument} from "react-icons/fc";
import {IconType} from "react-icons";
import {FC} from "react";

type SocialLinks = 'github' | 'linkedIn' | 'twitter' | 'resume';
type NameToIcon = {
	[key in SocialLinks]: IconType;
}

const SocialIcon: NameToIcon = {
	github: FaGithub,
	linkedIn: FaLinkedinIn,
	twitter: FaTwitter,
	resume: FcDocument,
}

const SocialLink: FC<{ name: SocialLinks, href: string }> = ({name, href}) => {
	const Icon = SocialIcon[name];
	return (
		<a href={href} target={'_blank'} rel="noreferrer">
			<Tooltip label={name} bg={'secondary'} color={'black'}>
				<Box w={'40px'} h={'40px'} borderRadius={'100%'} p={1} _hover={{boxShadow: 'md'}}>
					<Icon size={'100%'}/>
				</Box>
			</Tooltip>
		</a>
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
		<Flex direction={'column'} gap={2}>
			<Title title={'connect'}/>
			<SocialLinks/>
		</Flex>
	)
}