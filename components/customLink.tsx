import { FC, HTMLAttributeAnchorTarget, ReactNode } from "react";
import { Link, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children?: ReactNode;
  href: string;
  target: HTMLAttributeAnchorTarget;
  rel: string;
}

export const CustomLink: FC<Props> = ({children, ...otherProps}) => {
  return (
    <Link mx={1} style={{ background: useColorModeValue('#FFD70099', '#FFD700B3'), color: 'black', borderRadius: '2px' }} {...otherProps}>
      <b>{children}</b>
    </Link>
  )
}