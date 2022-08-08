import { Box, Text, chakra, Stack, VStack, useMediaQuery } from "@chakra-ui/react";
import { FC } from "react";
import Image from 'next/image';

export const ChakraImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

const Me: FC = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <Stack direction={['column', 'row']} align={['center', 'center']} spacing={isLargerThan600 ? 12 : 4}>
      <Box
        w={'120px'}
        h={'120px'}
        borderWidth={1} borderStyle="solid" borderColor='#ffff' borderRadius={'full'}
        boxShadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'
        alignSelf={'center'}
      >
        <ChakraImage src={'/me_square.jpeg'} alt='me' borderRadius={'full'} width="120px" height="120px" />
      </Box>
      <VStack align='flex-start' spacing={1}>
        <Text fontSize={'4xl'} fontWeight={'bold'}>Roman Zhydyk</Text>
        <Stack direction={'row'} spacing={0} fontSize={isLargerThan600 ? 'md' : 'sm'}>
          <Text pr={2}>
            Software Engineer.
          </Text>
          <Text pr={2}>
            Crypto Enthusiast.
          </Text>
          <Text pr={2}>
            Truth Seeker.
          </Text>
        </Stack>
      </VStack>
    </Stack>
  );
};

export default Me;