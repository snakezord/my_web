import {MdKeyboardArrowRight} from "react-icons/md";
import {Button, useColorMode} from "@chakra-ui/react";
import {FC} from "react";
import NextLink from "next/link";

const CallToActionButton: FC<{ text: string, href: string }> = ({text, href}) => {
	const {colorMode} = useColorMode();
	return (
		<NextLink href={href} passHref>
			<Button
				boxShadow={
					`3px 3px 6px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
					`-3px -3px 6px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
				}
				bg={'secondary'} color={'black'} mt={4} rightIcon={<MdKeyboardArrowRight/>}>
				{text}
			</Button>
		</NextLink>
	)
}

export default CallToActionButton;