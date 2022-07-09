import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const TvContext = createContext();

const TvContextProvider = (props) => {
  const [Tv, setTv] = useState([]);
  useEffect(() => {
    const getTv = async () => {
      const result = await axios.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=14995c6db2dc9a48116269b217e36722&language=en-US&page=1");
      console.log(result);
      setTv(result.data.results);
    };
    getTv();

    console.log(Tv);
  }, []);
  return (
    <div>
      <TvContext.Provider value={{ Tv }}>{props.children}</TvContext.Provider>
    </div>
  );
};

export default TvContextProvider;
