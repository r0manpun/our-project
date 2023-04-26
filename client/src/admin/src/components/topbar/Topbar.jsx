import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SheinPokhara</span>
        </div>
        <div className="topCenter">
          <span className="logo">Admin</span>
        </div>
         <div>
          <img src="https://static.vecteezy.com/system/resources/previews/000/290/610/original/administration-vector-icon.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
