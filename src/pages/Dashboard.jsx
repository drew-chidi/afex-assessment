import React, { useContext, useEffect, useState } from "react";
import DashboardContent from "../components/Dashboard/DashboardContent";
import io from "socket.io-client";
import {
  getLivePrice,
  securitiesBoards,
} from "../components/util/dashboard-api";
import { AuthContext } from "../store/auth-context";
// const socket = io.connect("wss://comx-sand-api.afexnigeria.com/stream/trades");

const Dashboard = () => {
  const [orderBook, setOrderBook] = useState;
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  // Get Securities Boards
  // useEffect(() => {
  //   async function getBoards() {
  //     await securitiesBoards({ token });
  //   }
  //   getBoards();
  // }, [token]);

  // //Get Live Tape
  // useEffect(() => {
  //   async function getLiveTape() {
  //     const response = await getLivePrice({ token });
  //     console.log(response);
  //   }
  //   getLivePrice();
  // }, []);

  // Web socket listener
  // useEffect(() => {
  //   socket.on((data) => {
  //     setOrderBook(data);
  //     console.log(data);
  //   });
  // }, [socket]);

  return (
    <div>
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
