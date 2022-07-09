import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ApiContext = createContext();

const ApiContextProvider = (props) => {
  const [Api, setApi] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      const result = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=14995c6db2dc9a48116269b217e36722&language=en-US&page=1");
      console.log(result);
      setApi(result.data.results);
    };
    getApi();

    console.log(Api);
  }, []);
  return (
    <div>
      <ApiContext.Provider value={{ Api }}>{props.children}</ApiContext.Provider>
    </div>
  );
};

export default ApiContextProvider;
