import { VStack, useMediaQuery, Stack, Text } from "@chakra-ui/react";
import { Title } from "./title";

const Hobbies = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <VStack spacing={2} align={'flex-start'}>
      <Title title={'hobbies'} />
      <Stack direction={'row'} spacing={0} fontSize={isLargerThan600 ? 'md' : 'sm'}>
        <Text pr={2}>
          Working out 🏋.
        </Text>
        <Text pr={2}>
          Crypto ₿.
        </Text>
        <Text pr={2}>
          Entrepreneurship 💸.
        </Text>
      </Stack>
    </VStack>
  );
};

export default Hobbies;