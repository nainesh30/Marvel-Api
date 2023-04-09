import React, { Component, useEffect, useState } from "react";
import Item from "./containeritems/Item";
import "./Main-container.css";


const MainContainer = (props) => {
  let article = require("./marvel.json");
  const [slicenum, setSlicenum] = useState(0);

  useEffect(async () => {
    let url =
      "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=560cad3d40550d8a366041d9af707f0c&hash=36846fa943e4c702fb10e7dc969099b0";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
  }, []);
  const clickhandlernext = () => {
    setSlicenum(slicenum + 9);
  };
  const clickhandlerprev = () => {
    if (slicenum === 0) {
      setSlicenum(0);
    } else {
      setSlicenum(slicenum - 9);
    }
  };
  //function to capitalize

  const toCapitalize = (text) => {
    return text.slice(0, 1).toUpperCase() + text.slice(1);
  };
  return (
    <>
      {/* <h1>Hello from main MainContainer</h1> */}
      <div className="row">
        {article.slice(slicenum, slicenum + 9).map((element) => {
          return (
            <div key={element.id}>
              <Item
                // name={element.name.toUpperCase()}
                name={toCapitalize(element.name)}
                desc={toCapitalize(element.sex)}
                id={toCapitalize(element.id)}
              ></Item>{" "}
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <div className="leftbutton">
          {" "}
          <button onClick={clickhandlerprev}> Prev Page</button>{" "}
        </div>
        <div className="rightbutton">
          {" "}
          <button onClick={clickhandlernext}> Next Page</button>
        </div>
      </div>
    </>
  );
};
export default MainContainer;
