import { VStack, useMediaQuery, Stack, Text, Link } from "@chakra-ui/react";
import { Title } from "./title";

const Hobbies = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <VStack spacing={2} align={'flex-start'}>
      <Title title={'Hobbies'} />
      <Stack direction={'column'} fontSize={isLargerThan600 ? 'md' : 'sm'}>
        <Text>
        🏋️‍♂️ I workout in the morning. I need that endorphins rush in my blood 🩸.
        </Text>
        <Text>
        💵 I invest in markets. My portfolio is mainly cryptos. I have made 10k in a single trade 📈. Also, I have lost 50k in a single trade 📉.
        </Text>
        <Text>
          💸 I am future angel investor. I follow latest tech startups and news daily. <br />
          Recommended podcast <Link href={'https://www.allinpodcast.co/'} target={'_blank'} rel="noreferrer" style={{ background: '#FFD700', color: 'black' }}>
          ♠️ All In
          </Link>
        </Text>
      </Stack>
    </VStack>
  );
};

export default Hobbies;