import React, { useState } from "react";

import {
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Flex,
  IconButton,
  Image,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Navbar() {
  const [language, setLanguage] = useState("En");

  return (
    <Container maxWidth="100%" padding="1">
      <Flex width="full">
        <Flex
          position="fixed"
          zIndex="1"
          h="9vh"
          width="100%"
          paddingY={3}
          backgroundColor="black"
        >
          <Box>
            <Button bg="black" variant="unstyled">
              <Image
                justifyContent="center"
                marginY="0"
                padding="1"
                left="10"
                width="150px"
                height="6vh"
                objectFit="cover"
                src="https://www.wired.com/wp-content/uploads/2016/04/Amazon-Logo-PNG-1200x630.jpg"
                alt="Amazon"
              />
            </Button>
          </Box>

          <Container marginX="10" alignItems="center" width="800%">
            <FormControl width="205%">
              <HStack>
                <Input
                  variant="filled"
                  placeholder="Search"
                  size="md"
                  color="white"
                />
                <IconButton
                  colorScheme="blue"
                  aria-label="Search database"
                  icon={<SearchIcon />}
                />
              </HStack>
            </FormControl>
          </Container>
          <Container marginRight={20} width="15%" alignItems="flex-end">
            <HStack spacing={3}>
              <FormControl color="white">
                <HStack>
                  <FormLabel></FormLabel>
                  <Select
                    bg="black"
                    borderColor="white"
                    color="white"
                    placeholder="En"
                    width="sm"
                  >
                    <option>Hin</option>
                    <option>Guj</option>
                  </Select>
                </HStack>
              </FormControl>
              <Button paddingX="10" marginX="10" justifyContent="center">
                Register
              </Button>
            </HStack>
          </Container>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Navbar;
