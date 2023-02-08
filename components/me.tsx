import { Box, Text, chakra, Stack, VStack, useMediaQuery } from "@chakra-ui/react";
import { FC } from "react";
import Image from 'next/image';

export const ChakraImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

const PIC_SIZE = '200px'

const Me: FC = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <Stack direction={['column', 'row']} align='center' spacing={isLargerThan600 ? 2 : 3}>
      <VStack align='flex-start' spacing={1} width='1fr'>
        <Text fontSize={'4xl'} fontWeight={'bold'}>Roman Zhydyk</Text>
        <Stack direction={'row'} spacing={2} fontSize={isLargerThan600 ? 'md' : 'sm'}>
          <Text >
            Software Engineer.
          </Text>
          <Text>
            Crypto Enthusiast.
          </Text>
          <Text>
            Truth Seeker.
          </Text>
        </Stack>
      </VStack>
      <Box
        minWidth={PIC_SIZE}
        w={PIC_SIZE}
        h={PIC_SIZE}
        borderWidth={1} borderStyle="solid" borderColor='#ffff' borderRadius={'full'}
        boxShadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'
        alignSelf={'center'}
      >
        <ChakraImage src={'/me-christmass.png'} alt='me' borderRadius={'full'} width={PIC_SIZE} height={PIC_SIZE} />
      </Box>
    </Stack>
  );
};

export default Me;