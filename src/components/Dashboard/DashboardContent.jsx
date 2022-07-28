import React from "react";
import Board from "./Board";
import classes from "./DashboardContent.module.css";
import Market from "./Market/Market";
import Product from "./Product";
import logo from "../../assets/Rectangle.png";

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
        <div>
          <div>
            <button>Icon 1</button>
            <p>Overview</p>
          </div>
          <div>
            <button>Icon 2</button>
            <p>Market</p>
          </div>
          <div>
            <button>Icon 3</button>
            <p>Portfolio</p>
          </div>
          <div>
            <button>Icon 4</button>
            <p>Community</p>
          </div>
          <div>
            <button>Icon 5</button>
            <p>Requests</p>
          </div>
          <div>
            <button>Icon 6</button>
            <p>Settings</p>
          </div>
        </div>
        <div className={classes.sideTab}>
          <input type='text' placeholder='search' />
          <div>
            <div>
              <div>Icon Here</div>
              <button>Product View</button>
            </div>
            <div>
              <div>Icon Here</div>
              <button>Order Book</button>
            </div>
            <div>
              <div>Icon Here</div>
              <button>Price History</button>
            </div>
            <div>
              <div>Icon Here</div>
              <button>Open orders</button>
            </div>
            <div>
              <div>Icon Here</div>
              <button>Closed trades</button>
            </div>
            <div>
              <div>Icon Here</div>
              <button>Cancel Trades</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Board />
          </div>
          <div>
            <Product />
          </div>
          <Market />
        </div>
      </div>
      <footer>
        <div>Live Market</div>
      </footer>
    </div>
  );
};

export default DashboardContent;
