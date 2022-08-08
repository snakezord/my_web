import { motion } from "framer-motion";
import { Box, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box mr={5}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={colorMode}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label='theme mode trigger'
          onClick={toggleColorMode}
          bg={`${colorMode}.brand.300`}
          color={'white'}
        >
          {useColorModeValue(<MdDarkMode size={24} />, <MdLightMode size={24} />)}
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default ThemeButton;