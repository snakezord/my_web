import { MdKeyboardArrowRight } from "react-icons/md";
import { Button, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import NextLink from "next/link";

const CallToActionButton: FC<{ text: string, href: string; }> = ({ text, href }) => {
  const { colorMode } = useColorMode();
  return (
    <NextLink href={href} passHref>
      <Button
        size={'md'}
        fontSize='1rem'
        p={5}
        sx={{
          '&:hover': {
            bgColor: `hover.${colorMode === 'dark' ? 'light' : 'dark'}`,
            color: colorMode === 'dark' ? 'black' : 'white'
          },
          bgColor: `${colorMode}.brand.400`,
          border: `1px solid ${colorMode === 'dark' ? '#FFD70080' : '#FFD700CC'}`
        }}
        mt={4} rightIcon={<MdKeyboardArrowRight />}>
        {text}
      </Button>
    </NextLink>
  );
};

export default CallToActionButton;