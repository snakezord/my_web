import { Box, useColorModeValue, useMediaQuery, Text } from "@chakra-ui/react";

const Footer = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  return (
    <Box
      bottom={0}
      position={isLargerThan1280 ? 'fixed' : 'initial'}
      zIndex={5}
      p={3}
      pt={4}
      css={{ backdropFilter: 'blur(1.5px)' }}
    >
      <Text fontSize={isLargerThan1280 ? 'md' : 'small'}><Box as={'span'} bg={'primary'}>By</Box> Roman Zhydyk
        2022</Text>
    </Box>
  );
};

export default Footer;