import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

function Item({ _id, title, description, price, image, alt }) {
  const dispatch = useDispatch();
  function addtocart() {
    console.log({ _id, title, price, image });
    dispatch(addToCart(_id, title, price, image));
  }
  return (
    <>
      <Card maxWidth="sm" maxHeight="550px">
        <CardBody>
          <Box variant="ghost">
            <Image
              src={image}
              alt={alt}
              boxSize="250px"
              borderRadius="full"
              margin="auto"
            />
          </Box>
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
            <Text color="blue.600" fontSize="2xl">
              Price : {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2" margin="auto">
            <Button variant="solid" colorScheme="blue" onClick={addtocart}>
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default Item;
