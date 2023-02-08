import { Box, useColorModeValue, useMediaQuery, Text } from "@chakra-ui/react";

const Footer = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  return (
    <Box
      bottom={0}
      right={0}
      position={isLargerThan1280 ? 'fixed' : 'initial'}
      zIndex={5}
      p={3}
      css={{ backdropFilter: 'blur(1.5px)' }}
    >
      <Text fontSize={isLargerThan1280 ? 'sm' : 'small'}><Box as={'span'} bg={'primary'}>By</Box> Roman Zhydyk
        2023</Text>
    </Box>
  );
};

export default Footer;