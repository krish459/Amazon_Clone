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

  //   const [fliterItem, setfliterItem] = useState("All");
  //   console.log(fliterItem);

  useEffect(() => {
    dispatch(getAllItems());
  }, []);

  return (
    <>
      <Heading color="black">Top Results</Heading>
      <hr />
      <div className="mt-5 text-center main-heading">
        <div className="container">
          <div className="d-flex justify-content-around">
            <button
              className="btn btn-warning"
              //   onClick={() => setfliterItem("All")}
            >
              All
            </button>
            <button
              className="btn btn-warning"
              //   onClick={setfliterItem("Furniture")}
            >
              Furniture
            </button>
            <button
              className="btn btn-warning"
              //   onClick={setfliterItem("Books")}
            >
              Books
            </button>
            <button
              className="btn btn-warning"
              //   onClick={setfliterItem("Clothes")}
            >
              Clothes
            </button>
          </div>
        </div>
      </div>
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
