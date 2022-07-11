import React, { useEffect, useState } from "react";
import { ApiContext } from "./ApiContext";
const DetailFlimContextProvider = (props) => {
  const [DetailFlim, setDetailFlim] = useState([]);
  useEffect(() => {
    const getDetailFlim = async () => {
      const result = await axios.get("https://api.themoviedb.org/3/movie/{Api.item.id}?api_key=14995c6db2dc9a48116269b217e36722&language=en-US");
    };
  });
  return <div>DetailFlim</div>;
};

export default DetailFlimContextProvider;
