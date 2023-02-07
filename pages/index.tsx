import type { NextPage } from 'next';
import { useMediaQuery, VStack } from '@chakra-ui/react';
import Me from '../components/me';
import Whoami from "../components/whoami";
import { Social } from "../components/social";
import Animate from "../components/animate";
import Hobbies from "../components/hobbies";
import Blog from "../components/blog";
import Seo from "../components/seo";

const Home: NextPage = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <>
      <Seo
        metaTitle={"Roman Zhydyk's website & blog"}
        metaDescription={"Roman Zhydyk's personal website & blog. " +
          "Roman is a software engineer with a diverse skill-set. " +
          "Like a real man, he constantly seeks improvement—both physically & mentally."
        }
      />
      <VStack spacing={isLargerThan600 ? 12 : 6} align={'flex-start'}>
        <Animate>
          <Me />
        </Animate>
        <Animate delay={0.2}>
          <Whoami />
        </Animate>
        <Animate delay={0.4}>
          <Blog />
        </Animate>
        <Animate delay={0.6}>
          <Hobbies />
        </Animate>
        <Animate delay={0.8}>
          <Social />
        </Animate>
      </VStack>
    </>
  );
};

export default Home;