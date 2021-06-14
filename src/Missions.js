import {  useState,useEffect } from 'react'
import "./styles.css";


function Missions() {


  useEffect(() => {
    fetchItems()
  },[])


  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch('https://api.spacexdata.com/v3/launches')
    const dataJson = await data.json()
    console.log(dataJson)
    setItems(dataJson)

  }
  const cardStyle = {
    background: "lightblue",
    //borderRadius: "15px",
    width: "100%",
    left: "50%",
    right: "50%",
    color: "Black",
    padding: "40px",
    borderBottom: "3px solid grey",
    fontFamily: "Arial",
    textFlign: "center"
  }


  return (

    <div>
      {items.map(item => {
        let date = new Date(item.launch_date_utc)
        return <div style={cardStyle}>
          <h1>{item.mission_name}</h1>
          <p><b>Flight number: </b>{item.flight_number}</p>
          <p><b>Launch Date: </b>{date.toUTCString()}</p>

          {item.links.flickr_images.length > 0 &&
          <img src={item.links.flickr_images[0]} alt="RocketImg" borderRadius="10px" width="400" height="400"/>
          }
        </div>
      })}

    </div>
  );
}


export default Missions;
