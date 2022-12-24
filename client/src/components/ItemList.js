import { Box, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../actions/itemAction";

function ItemList() {
  const dispatch = useDispatch();
  const itemsstate = useSelector((state) => state.getAllItemsReducer);

  const { items } = itemsstate;
  useEffect(() => {
    dispatch(getAllItems());
  }, []);

  return (
    <>
      <Heading color="black">Top Results</Heading>
      <SimpleGrid columns={4} spacing="2px" marginTop="13vh" zIndex={-1}>
        {items.map((e) => (
          <Box key={e._id}>
            <Item
              _id={e._id}
              title={e.title}
              description={e.description}
              price={e.price}
              image={e.image}
              alt={e.alt}
            />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}

export default ItemList;
