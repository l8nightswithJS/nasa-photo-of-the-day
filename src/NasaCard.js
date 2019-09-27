import React from 'react';
import useAxios from 'axios-hooks';
import "./styles.css";
 
export default function NasaCard(props) {
  const [{ data, loading, error }] = useAxios(
    'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
  )
  
    
  if (loading) return <p>Loading...</p>
  
  if (error) return <p>Error!</p>
  
  return (
    <div className="container" >
      <div className="pod-title">
        <h1>{data.title}</h1>
      </div>

      <div className="pod-img">
        <img className="img" src={data.url} alt={data.title} />
        <p>{data.explanation}</p>
      </div>

      <div className="footer">
      <p>{data.date}, {console.log(data)}</p>
      </div>
    </div>
  
  )
    
}



