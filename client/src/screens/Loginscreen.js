import React from "react";
import {
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import Cartscreen from "./Cartscreen";

function Loginscreen() {
  return (
    <Container maxWidth="container.lx" padding="50" alignItems="center">
      <Flex h="100vh" paddingY={20}>
        <VStack bg="gray.100" w="full" h="full" p={5} spacing={1}>
          <VStack spacing={2} alignItems="center">
            <Heading>SignUp</Heading>
            <Text>If you already have an account. Go To Login!</Text>
          </VStack>
          <SimpleGrid column={2} columnGap={3} rowGap={2}>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Krish" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Shah" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select>
                  <option>India</option>
                  <option>Australia</option>
                  <option>America</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <Select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="example@gmail.com" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Set strong password" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <Checkbox>I accept all the terms and conditions.</Checkbox>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Button
                width="full"
                size="md"
                background="green"
                color="whiteAlpha.900"
              >
                SignUp
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>

        <VStack
          w="full"
          h="full"
          p={5}
          spacing={1}
          //   alignItems="flex-start"
        >
          <VStack spacing={2} alignItems="center">
            <Heading>Login</Heading>
            <Text>If you Dont have an account. Go To SignUp!</Text>
          </VStack>
          <SimpleGrid column={2} columnGap={3} rowGap={2}>
            <GridItem colSpan={4} alignItems="center">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter valid Email" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter valid password" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
              <Button
                width="full"
                size="md"
                background="green"
                color="whiteAlpha.900"
              >
                Login
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Flex>
      <Cartscreen />
    </Container>
  );
}

export default Loginscreen;
