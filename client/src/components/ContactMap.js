import React, { useState } from "react";
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
  Textarea,
} from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";

function ContactMap() {
  const [nemail, setnemail] = useState("");
  const [naam, setnaam] = useState("");
  const [mess, setmess] = useState("");
  const mailer = () => {
    const ele = { nemail, naam, mess };

    console.log(ele);

    setnemail("");
    setnaam("");
    setmess("");
  };
  //   router(nemail, naam, mess);

  return (
    <Container maxWidth="container.lx" padding="50" alignItems="center">
      <Flex h="100vh" paddingY={20}>
        <VStack bg="gray.100" w="full" h="full" p={5} spacing={1}>
          {/* <AspectRatio> */}
          <iframe
            width="675vh"
            height="1500vh"
            src="https://www.youtube.com/embed/9AgtIYQL2z8"
          ></iframe>
          {/* </AspectRatio> */}
        </VStack>

        <VStack
          w="full"
          h="full"
          p={5}
          spacing={1}
          //   alignItems="flex-start"
        >
          <VStack spacing={2} alignItems="center">
            <Heading>Contact Us</Heading>
            <Text>For any queries,put your grievences here! </Text>
          </VStack>
          <SimpleGrid column={10} columnGap={3} rowGap={2}>
            <GridItem colSpan={8} alignItems="center">
              <FormControl>
                <FormLabel name="email">Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter valid Email"
                  onChange={(e) => {
                    setnemail(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={9}>
              <FormControl>
                <FormLabel name="name">Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Your name!"
                  onChange={(e) => {
                    setnaam(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={10}>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Enter your query here !!"
                  name="message"
                  onChange={(e) => {
                    setmess(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={10}>
              <Button
                width="full"
                size="md"
                background="green"
                color="whiteAlpha.900"
                onClick={mailer}
              >
                Submit
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Flex>
    </Container>
  );
}

export default ContactMap;
