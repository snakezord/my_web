import {FC} from "react";
import { Box, Flex, HStack, Link, Tooltip, useColorModeValue } from "@chakra-ui/react";
//
import {FcDocument} from "react-icons/fc";
import {IconType} from "react-icons";
import {
	FaGithub,
	FaLinkedinIn,
	FaTwitter,
	FaExternalLinkAlt
} from "react-icons/fa";

type SocialLinks = 'github' | 'Linked In' | 'Twitter' | 'Resume' | 'Website' | string;
type NameToIcon = {
	[key in SocialLinks]: IconType;
}

const SocialIcon: NameToIcon = {
	Github: FaGithub,
	"Linked In": FaLinkedinIn,
	Twitter: FaTwitter,
	Resume: FcDocument,
	Website: FaExternalLinkAlt
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
		w = '32px',
		h = '32px'
  }) => {
	const Icon = SocialIcon[name] || icon;
	return (
		<Link href={href} target={'_blank'} rel="noreferrer">
			<Tooltip label={name} hasArrow placement="top" bg={'#FFD700'} color={'black'}>
        <Box w={w} h={h} borderRadius={'100%'} p={'6px'} sx={{ bg: useColorModeValue('#FFD70099', '#FFD700B3'), color:  'black'}} _hover={{color: `hover.dark`}}>
					<Icon size={'100%'}/>
				</Box>
			</Tooltip>
		</Link>
	)
}

const SocialLinks = () => {
	return (
		<HStack spacing={1}>
			<SocialLink name={'Twitter'} href={'https://twitter.com/2_comma_club'}/>
			<SocialLink name={'Github'} href={'https://github.com/snakezord'}/>
			<SocialLink name={'Linked In'} href={'https://www.linkedin.com/in/roman-zhydyk-5a3374203'}/>
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