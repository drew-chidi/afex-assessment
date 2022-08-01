import React from "react";
import Board from "./BoardTab";
import classes from "./DashboardContent.module.css";
import Market from "./Market/Market";
// import Product from "./Product";
import logo from "../../assets/Rectangle.png";
import {
  AiOutlineRise,
  AiOutlineFieldTime,
  AiOutlineEye,
  AiOutlineCheckCircle,
  AiOutlineFile,
} from "react-icons/ai";
import { FiBook, FiSettings } from "react-icons/fi";
import { MdOutlineCancel, MdOutlinePeopleAlt } from "react-icons/md";
import { BsColumnsGap, BsBag } from "react-icons/bs";
import ProductTab from "./ProductTab";
import BoardTab from "./BoardTab";

const DashboardContent = () => {
  return (
    <div className={classes.container}>
      <header className={classes.headerBox}>
        <div>
          <div className={classes.logo}>
            <img src={logo} alt='company logo' />
          </div>
        </div>
        <nav>
          <div>
            <p>CASH BALANCE</p>
            <p>N8,374,763</p>
          </div>
          <div>
            <p>SECURITIES VALUE</p>
            <p>N8,374,763</p>
          </div>
          <div>
            <p>LOAN BALANCE</p>
            <p>N8,374,763</p>
          </div>
        </nav>
        <div>
          <button>DEMO</button>
        </div>
      </header>
      <div className={classes.dashboardContainer}>
        <div className={classes.sideTrayColumn}>
          <div className={classes.sideTray}>
            <button>
              <BsColumnsGap />
            </button>
            <p>Overview</p>
          </div>
          <div className={classes.sideTray}>
            <button>
              <AiOutlineRise />
            </button>
            <p>Market</p>
          </div>
          <div className={classes.sideTray}>
            <button>
              <BsBag />
            </button>
            <p>Portfolio</p>
          </div>
          <div className={classes.sideTray}>
            <button>
              <MdOutlinePeopleAlt />
            </button>
            <p>Community</p>
          </div>
          <div className={classes.sideTray}>
            <button>
              <AiOutlineFile />
            </button>
            <p>Requests</p>
          </div>
          <div className={classes.sideTray}>
            <button>
              <FiSettings />
            </button>
            <p>Settings</p>
          </div>
        </div>
        <div className={classes.sideTab}>
          <input type='text' placeholder='search' />
          <div>
            <div className={classes.sidetabLinks}>
              <AiOutlineRise />
              <button>Product View</button>
            </div>
            <div className={classes.sidetabLinks}>
              <div>
                <FiBook />
              </div>
              <button>Order Book</button>
            </div>
            <div className={classes.sidetabLinks}>
              <div>
                <AiOutlineFieldTime />
              </div>
              <button>Price History</button>
            </div>
            <div className={classes.sidetabLinks}>
              <div>
                <AiOutlineEye />
              </div>
              <button>Open orders</button>
            </div>
            <div className={classes.sidetabLinks}>
              <div>
                <AiOutlineCheckCircle />
              </div>
              <button>Closed trades</button>
            </div>
            <div className={classes.sidetabLinks}>
              <div>
                <MdOutlineCancel />
              </div>
              <button>Cancel Trades</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <BoardTab />
          </div>
          <div>
            <ProductTab />
          </div>
          <div>
            <Market />
          </div>
        </div>
      </div>
      <footer className={classes.footerBox}>
        <p>Live Market</p>
      </footer>
    </div>
  );
};

export default DashboardContent;
