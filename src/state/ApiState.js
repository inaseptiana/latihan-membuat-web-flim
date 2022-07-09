import React from "react";
import Api from "../component/Api";
import ApiContextProvider from "../context/ApiContext";

const ApiState = () => {
  return (
    <div className="Api">
      <h1>ApiState</h1>
      <ApiContextProvider>
        <Api />
      </ApiContextProvider>
    </div>
  );
};

export default ApiState;
