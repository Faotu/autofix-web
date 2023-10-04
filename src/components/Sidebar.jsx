import React from "react";
import Icon from "../Images/Icon.svg";
import Dashboard from "../Images/dashboard.svg";
import News from "../Images/news.svg";
import Performance from "../Images/performance.svg";
import Settings from "../Images/settings.svg";
import Profile from "../Images/profile.png";
import Support from "../Images/support.svg";
import Transaction from "../Images/transactions.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logoContainer">
        <img src={Icon} alt="" />
        <h2 className="title">Fly-tender</h2>
        <div className="burgerContainer">
          <div className="burgerTrigger"></div>
          <div className="burgerMenu"></div>
        </div>
        <div className="profileContainer">
          <img src={Profile} alt="" className="profile" />
          <p className="name">Hey, Happy</p>
          <p>faotuhappy@gmail.com</p>
      
        </div>
        <div className="contentContainer">
          <ul>
            <li>
              <img src={Dashboard} alt="dashboard" />
              <a href="/">dashboard</a>
            </li>
            <li>
              <img src={Transaction} alt="transaction" />
              <a href="/">transactions</a>
              
            </li>
            <li>
              <img src={Performance} alt="performance" />
              <a href="/">performance</a>
              
            </li>

            <li>
              <img src={News} alt="news" />
              <a href="/">news</a>
              
            </li>
            <li>
              <img src={Settings} alt="settings" />
              <a href="/">settings</a>
              
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
