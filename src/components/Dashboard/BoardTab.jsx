import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import classes from "./Board.module.css";

const data = ["x-Traded", "OTC", "FI", "Derivatives"];

const BoardTab = () => {
  return (
    <div className={classes.linkBox}>
      <Tabs
        variant='soft-rounded'
        colorScheme='red'
        sx={{ display: "flex", alignItems: "center" }}
      >
        <p>Board</p>
        <TabList>
          {data.map((item) => (
            <Tab sx={{ width: "max-content" }}>{item}</Tab>
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

export default BoardTab;
