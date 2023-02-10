import { FC, HTMLAttributeAnchorTarget, ReactNode } from "react";
import { Box, Link, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children?: ReactNode;
  href: string;
  target: HTMLAttributeAnchorTarget;
  rel: string;
}

export const CustomLink: FC<Props> = ({children, ...otherProps}) => {
  return (
    <Link sx={{textDecoration: 'none', '_hover': {textDecoration: 'none'}}} {...otherProps} >
      <Box
        as='span'
        mx={1}
        css={{
          background: useColorModeValue('#FFD70099', '#FFD700B3'),
          color: 'black',
          borderRadius: '2px',
        }} 
        _hover={{bg: '#FFD700'}}
      >
        <b>{children}</b>
      </Box>
    </Link>
  )
}