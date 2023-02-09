import type { NextPage } from 'next';
import { useMediaQuery, VStack } from '@chakra-ui/react';
import Me from '../components/me';
import Whoami from "../components/whoami";
import Animate from "../components/animate";
import Hobbies from "../components/hobbies";
import Blog from "../components/blog";
import Seo from "../components/seo";

const Home: NextPage = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <>
      <Seo
        metaTitle={"Roman Zhydyk's personal website & blog"}
        metaDescription={"A software engineer who can build anything. "}
      />
      <VStack spacing={isLargerThan600 ? 14 : 6} mb={6} align={'flex-start'}>
        <Animate>
          <Me />
        </Animate>
        <Animate delay={0.15}>
          <Whoami />
        </Animate>
        <Animate delay={0.3}>
          <Blog />
        </Animate>
        <Animate delay={0.45}>
          <Hobbies />
        </Animate>
      </VStack>
    </>
  );
};

export default Home;