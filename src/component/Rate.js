import React from "react";
import "./Rate.css";
function Rate({ rating, setSearchRate }) {
  const stars = (x) => {
    let starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starArray.push(
          <span className="stars" key={i} >
            ★
          </span>
        );
      } else {
        starArray.push(
          <span className="stars" key={i}>
            ☆
          </span>
        );
      }
    }
    return starArray;
  };

  return <div>{stars(rating)}</div>;
}

export default Rate;