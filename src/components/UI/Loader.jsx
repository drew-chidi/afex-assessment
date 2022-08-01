import { Spinner } from "@chakra-ui/react";
import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='green.500'
        size='xl'
      />
    </div>
  );
};

export default Loader;
