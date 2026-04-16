import {
  Center,
  Container,
  Flex,
  Stack,
  Heading,
  IconButton,
  Box,
} from "@chakra-ui/react";

import { Moon, Sun } from "lucide-react";

import { useColorMode } from "./components/ui/color-mode";
import Form from "./components/Form";
import Items from "./components/Items";

function App() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box
      minH="100vh"
      // bg={{ base: "gray.50", _dark: "gray.950" }}
      // transition="background-color 0.3s ease"
      // pb="6"
    >
      <Container
        maxW="2xl"
        py={{ base: "6", md: "10" }}
        px={{ base: "4", md: "0" }}
      >
        <Stack w="100%" gap={{ base: "6", md: "8" }}>
          {/* Header */}
          <Flex justify="space-around" align="center">
            <Box>
              <Heading size="xl" color="fg.subtle" letterSpacing="wide">
                Todo List
              </Heading>
            </Box>
            <IconButton
              aria-label="Toggle theme"
              onClick={toggleColorMode}
              variant="subtle"
              size="lg"
              borderRadius="full"
            >
              {colorMode === "light" ? <Sun size={20} /> : <Moon size={20} />}
            </IconButton>
          </Flex>

          {/* Form and Items */}
          <Stack gap={{ base: "5", md: "6" }} px={{ base: "4", md: "0" }}>
            <Form />
            <Items />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
