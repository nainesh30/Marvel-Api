import React from "react";
import "./Seachbox.css";

import { useNavigate} from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const onchangehandler = (e) => {
    setValue(e.target.value);
    setTimeout(() => {
    navigate(`/result/${e.target.value}`);
      window.location.reload()
      
   }, 2000);
    
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          id="search"
          aria-autocomplete = "none"
          value={value}
          onChange={onchangehandler}
          placeholder="Enter The Character Name"
        />

{/* <button onClick={()=>navigate('/try')}>  button</button> */}

        {/* {console.log(value)} */}
      </div>
    </>
  );
};

export default Search;
