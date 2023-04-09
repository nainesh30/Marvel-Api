import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import Item from "./Main-container/containeritems/Item";
import Spinner from "./Spinner";

const Resultcontainer = () => {

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [er, setEr] = useState(false);
  // const [value, setValue] = useState('');
  let {value} = useParams();

  window.history.pushState(null, null, 'http://localhost:3000/')
  

    useEffect(() => {
      getuesers();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const getuesers = () => {

      let url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${value}&limit=30&ts=1&apikey=560cad3d40550d8a366041d9af707f0c&hash=36846fa943e4c702fb10e7dc969099b0`
    
      fetch(url)
        .then((res) => res.json())
        .then(
          (response) => {
            setData(response.data.results);
            // console.log(response.data.results)
            setLoading(false)         
          },
          (error) => {
            console.log(error);
            setData(null);
            setEr(true)
          }
          
        );
    };
    if(er===true) return <h1 style={{color: "#efff00", marginLeft:450, marginTop:100}}>Error in fetching Data  <br />  Check Your Internet Connection</h1>;
    
    if (loading===true) return <Spinner></Spinner>
    if(value.toLowerCase()==="nainesh"||value.toLowerCase()==="ninu")return <h1 style={{color: "cyan", marginLeft:400, marginTop:100}}>Website created with Love by {value.toUpperCase()}</h1>;
    if (data.length===0) return <h1 style={{color: "red", marginLeft:500, marginTop:100}}>No Result Found for : {value}</h1>;
  return (
    <>

<div className="row">
{data.map((element) => {
  return (
    <div key={element.id}>
      <Item
        // name={element.name.toUpperCase()}
        img={
          element.thumbnail.path + "." + element.thumbnail.extension
        }
        name={element.name}
        // desc={element.description}
        id={element.id}
      ></Item>{" "}
    </div>
  );
})}
</div>
</>
    
  )
}

export default Resultcontainer
