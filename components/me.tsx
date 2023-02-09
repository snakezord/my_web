import { Box, Text, chakra, Stack, VStack, useMediaQuery } from "@chakra-ui/react";
import { FC } from "react";
import Image from 'next/image';
import { Social } from "./social";

export const ChakraImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

const PIC_SIZE = '170px'

const Me: FC = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <Stack direction={['column', 'row']} align={['flex-start', 'flex-end']} justifyContent='space-between' spacing={isLargerThan600 ? 2 : 4}>
      <VStack align='flex-start' spacing={1} width='1fr'>
        <Stack direction={'row'} alignItems={'center'} flexWrap='wrap'>
          <Text fontSize={'3xl'} fontWeight={'bold'} mr={[0, 12]}>Roman Zhydyk</Text>
          <Social />
        </Stack>
        <Stack direction={'row'} spacing={2} fontSize={isLargerThan600 ? 'md' : 'smaller'}>
          <Text fontSize={['small', 'sm']}>
            Software Engineer. Crypto Enthusiast. Truth Seeker.
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