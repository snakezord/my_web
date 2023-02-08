import { Box, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ScrollDownSvg = () => {
  const { asPath } = useRouter();
  const [hasScrollBar, setHasScrollBar] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { colorMode } = useColorMode();
  useEffect(() => {
    setHasScrollBar((
      document.body.clientHeight > window.innerHeight)
      && ((document.body.clientHeight - window.innerHeight - scrollY) > 45)
    );
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [asPath, scrollY]);

  if (!hasScrollBar) return null;

  return (
    <Box className="scrolldown-wrapper" opacity={1 - (scrollY / 200)}>
      <Box className="scrolldown" bg={colorMode === 'light' ? '#000000D9' : '#A4A4A4D8'}
        border={`3px solid primary`}
      >
        <svg height="30" width="10" fill={colorMode === 'dark' ? '#000000' : '#ffffff'}>
          <circle className="scrolldown-p1" cx="5" cy="15" r="3" />
          <circle className="scrolldown-p2" cx="5" cy="15" r="3" />
        </svg>
      </Box>
    </Box>
  );
};

export default ScrollDownSvg;