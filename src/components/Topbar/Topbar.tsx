import React from 'react';
import {
  useColorMode,
  Box,
  IconButton,
} from "@chakra-ui/core";
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

export default (): React.ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      px={6}
      py={3}
      d="flex"
      justifyContent="flex-end"
    >
      <IconButton
        variant="outline"
        aria-label="Menu"
        icon={colorMode === 'light' ? RiMoonLine : RiSunLine}
        fontSize="22px"
        onClick={toggleColorMode}
      />
    </Box>
  );
}
