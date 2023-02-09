import { VStack, useMediaQuery, Stack, Text, Link } from "@chakra-ui/react";
import { Title } from "./title";

const Hobbies = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <VStack spacing={2} align={'flex-start'}>
      <Title title={'Hobbies'} />
      <Stack direction={'column'} fontSize={'sm'}>
        <Text>
          Waking up early to work out is like giving my body a shot of adrenaline. <br/>
          When it comes to investing, I&apos;m a thrill-seeker. <br/>
          My portfolio is a wild ride of crypto-currencies, with a lot of gains & losses. It&apos;s like a rollercoaster of emotions! <br/>
          But hey, I&apos;ve got my eyes on the future and my ear to the ground, following the latest tech startups and news like a true entrepreneur. <br/>
          And to fuel my obsession, I listen to a lot of podcasts & CEOs interviews specially recommending the
          <Link mx={1} href={'https://www.allinpodcast.co/'} target={'_blank'} rel="noreferrer" style={{ background: '#FFD700', color: 'black' }}>
          ♠️ All In 
          </Link>
           podcast because when it comes to investing and life, <br/><b>I&apos;m All-In, baby!</b>
        </Text>
      </Stack>
    </VStack>
  );
};

export default Hobbies;