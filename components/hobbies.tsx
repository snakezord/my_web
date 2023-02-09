import { VStack, Stack, Text } from "@chakra-ui/react";
import { Title } from "./title";
import { CustomLink } from "./customLink";

const Hobbies = () => {
  return (
    <VStack spacing={2} align={'flex-start'}>
      <Title title={'Hobbies'} />
      <Stack direction={'column'} fontSize={'sm'}>
        <Text>
          Waking up early to work out is like giving my body a shot of adrenaline. <br/>
          When it comes to investing, I&apos;m a thrill-seeker. <br/>
          My portfolio is a wide range of crypto-currencies, with many gains & but also, inevitably, many losses; I call them lessons. It&apos;s a rollercoaster of emotions!
          But hey, I&apos;ve got my eyes on the future and my ear to the ground, following the latest tech startups and news like a true entrepreneur. <br/>
          And to fuel my obsession, I listen to a lot of podcasts & CEOs interviews, specially recommending the
          <CustomLink href={'https://www.allinpodcast.co/'} target={'_blank'} rel="noreferrer">
          ♠️ All In 
          </CustomLink>
          podcast, because when it comes to investing and life, <b>I&apos;m All-In!</b>
        </Text>
      </Stack>
    </VStack>
  );
};

export default Hobbies;