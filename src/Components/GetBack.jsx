import React from "react";
import "./GetBack.css";
import { Link } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";

function GetBack() {
  return (
    <div className="return-div">
      <Link className="return-link">
        <IoMdReturnLeft />
      </Link>
    </div>
  );
}

export default GetBack;
