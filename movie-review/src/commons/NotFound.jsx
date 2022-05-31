import React from "react";
import image404 from "../assets/404.gif";

const NotFound = () => {
  return (
    <div className="p-6">
      <h1>Not Found</h1>
      <img src={image404} />
    </div>
  );
};

export default NotFound;
