import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";

function SingleItem({ imagelink }) {
  return (
    <>
      <Button variant="ghost">
        <Image src={imagelink} alt="loading" />
      </Button>
    </>
  );
}

export default SingleItem;
