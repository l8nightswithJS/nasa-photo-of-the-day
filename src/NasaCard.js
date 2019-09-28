import React, {useState, useEffect } from 'react';
import "./styles.css";
import Axios from 'axios';
 
function NasaCard() {
  const [data, setData] = useState([])
  
    useEffect(() => {
      async function fetch(){
        try{
          const nasa = await Axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            console.log(nasa);
            setData(nasa.data);
          }
        catch(err){
            console.log(err)
          }
      }
      fetch()
    },[]) 
    
  return (
    <div className="container" >
      <div className="pod-title">
        <h1>{data.title}</h1>
      </div>

      <div className="pod-img">
        <img className="img" src={data.url} alt={''} />
        <p>{data.explanation}</p>
      </div>

      <div className="footer">
      <p>{data.date}</p>
      </div>
    </div>
  
  )
    
}

export default NasaCard;

