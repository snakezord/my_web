import { FC } from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";

export const Title: FC<{ title: string, fontSize?: string, fontWeight?: string, h?: string; }> = (
  {
    title,
    fontSize = 'lg',
    fontWeight = 'bold',
    h = '4px'
  }
) => {
  const { colorMode } = useColorMode();
  return (
    <Flex direction={'column'} alignItems={'start'}>
      <Text fontSize={fontSize} fontWeight={fontWeight}>
        <Flex as={'span'} direction={'column'}>
          {title}
          <Box
            bg={'primary'}
            h={h}
            as={'span'}
          />
        </Flex>
      </Text>
    </Flex>
  );
};