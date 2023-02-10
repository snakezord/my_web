import { Box, Text, chakra, Stack, VStack, useMediaQuery, HStack, Show } from "@chakra-ui/react";
import { FC } from "react";
import Image from 'next/image';
import { Social } from "./social";

export const ChakraImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

const PIC_SIZE_SM = '100px'
const PIC_SIZE_LG = '170px'

const Me: FC = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <Stack direction={['column', 'row']} align={['flex-start', 'flex-end']} justifyContent='space-between' spacing={isLargerThan600 ? 2 : 4}>
      <VStack align='flex-start' spacing={[4, 1]} >
        <HStack align='flex-end' >
          <Stack direction={'row'} alignItems={'center'} flexWrap='wrap'>
            <Text
              fontSize={'3xl'}
              fontWeight={'bold'}
              mr={[0, 5]}
              backdropFilter={['blur(1.5px)', 'none']}
            >
              Roman Zhydyk
            </Text>
            <Social />
          </Stack>
          <Show below='sm'>
            <Box
              minWidth={PIC_SIZE_SM}
              w={PIC_SIZE_SM}
              h={PIC_SIZE_SM}
              borderWidth={1} borderStyle="solid" borderColor='#ffff' borderRadius={'full'}
              boxShadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'
              alignSelf={'center'}
            >
              <ChakraImage src={'/me-christmass.png'} alt='me' borderRadius={'full'} width={PIC_SIZE_SM} height={PIC_SIZE_SM} />
            </Box>
          </Show>
        </HStack>
        <Text fontSize={['smaller', 'sm']}>
          Software Engineer. Crypto Enthusiast. Truth Seeker.
        </Text>
      </VStack>
      <Show above='sm'>
            <Box
              minWidth={PIC_SIZE_LG}
              w={PIC_SIZE_LG}
              h={PIC_SIZE_LG}
              borderWidth={1} borderStyle="solid" borderColor='#ffff' borderRadius={'full'}
              boxShadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'
              alignSelf={'center'}
            >
              <ChakraImage src={'/me-christmass.png'} alt='me' borderRadius={'full'} width={PIC_SIZE_LG} height={PIC_SIZE_LG} />
            </Box>
          </Show>
    </Stack>
  );
};

export default Me;