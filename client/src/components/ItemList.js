import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../actions/itemAction";

function ItemList() {
  const dispatch = useDispatch();
  const itemsstate = useSelector((state) => state.getAllItemsReducer);

  const { items } = itemsstate;

  const [krishItem, setKrishItem] = useState(items);
  //   console.log(fliterItem);

  useEffect(() => {
    dispatch(getAllItems());
  }, []);

  const fliterItem = (categItem) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.type === categItem;
    });

    setKrishItem(updatedItems);
  };

  return (
    <>
      <Heading color="black">Top Results</Heading>
      <hr />
      <div className="mt-5 text-center main-heading">
        <div className="container">
          <div className="d-flex justify-content-around">
            <button
              className="btn btn-warning"
              onClick={() => setKrishItem(items)}
            >
              All
            </button>
            <button
              className="btn btn-warning"
              onClick={() => fliterItem("Furniture")}
            >
              Furniture
            </button>
            <button
              className="btn btn-warning"
              onClick={() => fliterItem("Book")}
            >
              Books
            </button>
            <button
              className="btn btn-warning"
              onClick={() => fliterItem("clothes")}
            >
              Clothes
            </button>
          </div>
        </div>
      </div>
      <SimpleGrid columns={4} spacing="2px" marginTop="13vh" zIndex={-1}>
        {krishItem.map((e) => (
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
