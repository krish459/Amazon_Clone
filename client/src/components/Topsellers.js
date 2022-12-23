import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import SingleItem from "./SingleItem";

function Topsellers() {
  let list = [
    {
      imagelink: "https://bit.ly/dan-abramov",
    },
    {
      imagelink: "https://bit.ly/dan-abramov",
    },
    {
      imagelink: "https://bit.ly/dan-abramov",
    },
    {
      imagelink: "https://bit.ly/dan-abramov",
    },
    {
      imagelink: "https://bit.ly/dan-abramov",
    },
    {
      imagelink: "https://bit.ly/dan-abramov",
    },
    {
      imagelink: "https://bit.ly/dan-abramov",
    },
    {
      imagelink: "https://bit.ly/dan-abramov",
    },
    {
      imagelink: "https://bit.ly/dan-abramov",
    },
    {
      imagelink: "https://bit.ly/dan-abramov",
    },
    {
      imagelink: "https://bit.ly/dan-abramov",
    },
    {
      imagelink: "https://bit.ly/dan-abramov",
    },
    {
      imagelink: "https://bit.ly/dan-abramov",
    },
  ];
  return (
    <>
      <Heading color="black" margin="50" alignItems="flex-start">
        Top Sellers
      </Heading>
      <Stack direction="row" spacing="12px" margin="25" padding="15">
        {list.map((e) => (
          <SingleItem imagelink={e.imagelink} />
        ))}
      </Stack>
    </>
  );
}

export default Topsellers;
