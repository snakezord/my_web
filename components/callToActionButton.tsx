import { MdKeyboardArrowRight } from "react-icons/md";
import { Button, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import NextLink from "next/link";

const CallToActionButton: FC<{ text: string, href: string; }> = ({ text, href }) => {
  return (
    <NextLink href={href} passHref>
      <Button
        size={'sm'}
        bg={'secondary'} color={'black'} mt={4} rightIcon={<MdKeyboardArrowRight />}>
        {text}
      </Button>
    </NextLink>
  );
};

export default CallToActionButton;