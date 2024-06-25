import React, { useState } from 'react';
import { useColorMode, Button } from "@chakra-ui/react";

const DarkModeOption = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Button onClick={toggleColorMode}>
      {isDark ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}

export default DarkModeOption;