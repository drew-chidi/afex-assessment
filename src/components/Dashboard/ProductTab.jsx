import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import classes from "./Board.module.css";

const data = ["All", "SMAZ", "SBBS", "SPRL", "SGNG", "SSGM", "FETC", "SCOC"];
const ProductTab = () => {
  return (
    <div className={classes.linkBox}>
      <Tabs
        variant='soft-rounded'
        colorScheme='red'
        sx={{ display: "flex", alignItems: "center" }}
      >
        <div>Product</div>
        <TabList>
          {data.map((item) => (
            <Tab>{item}</Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ProductTab;
