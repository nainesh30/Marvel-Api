import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import Spinner from "./components/Spinner";
import "./CharDetails.css";


const CharDetails = () => {
  let { id } = useParams();
  

  let url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=560cad3d40550d8a366041d9af707f0c&hash=36846fa943e4c702fb10e7dc969099b0`

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getuesers();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  const getuesers = () => {
  
    fetch(url)
      .then((res) => res.json())
      .then(
        (response) => {
          console.log(response.data.results[0]);
          setData(response.data.results[0]);
          setLoading(false)         
        },
        (error) => {
          console.log(error);
          setData(null);
        }
      );


  };

  if (loading===true) return <div className="spin-container"> <Spinner></Spinner> </div>
  if (!data) return <div>No Record Found</div>;
  return (
    <div className="Details-container" >
      <img src= {`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="" />
      <div className="data-char">
      <h2>{data.name}</h2>    
      {data.description?<h3>{data.description}</h3>: <h3> No data Found on the Server</h3>}
      
      </div>
      
    </div>
  )
}

export default CharDetails;
