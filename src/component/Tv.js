import React from "react";
import { TvContext } from "../context/TvContext";

const Tv = () => {
  return (
    <TvContext.Consumer>
      {({ Tv }) => {
        console.log(Tv);
        return (
          <div>
            <h1>halo</h1>
            {Tv === []
              ? null
              : Tv.map((item, key) => (
                  <div key={key}>
                    <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt="poster" width={200} />
                    <h4>{item.name}</h4>
                  </div>
                ))}
          </div>
        );
      }}
    </TvContext.Consumer>
  );
};

export default Tv;
