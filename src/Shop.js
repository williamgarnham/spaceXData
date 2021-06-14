import {  useState,useEffect } from 'react'

function Shop() {


  useEffect(() => {
    fetchItems()
  },[])


  const [items, setItems] = useState([])


  const fetchItems = async () => {
    const data = await fetch('https://api.spacexdata.com/v3/rockets')
    const dataJson = await data.json()
    console.log(dataJson)
    setItems(dataJson)

    /*await dataJson.map((item) => {
      return setShips(ships=>[...ships, {name:item.rocket_name, image:item.flickr_images[0]}])
    })*/

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

    <div >
      {items.map(item => {
        return <div style={cardStyle}>
          <h1>{item.rocket_name}</h1>
          <p1><b>Description: </b>{item.description}</p1>
          <br></br>
          <p1><b>Weight: </b>{item.mass.kg}kg</p1>
          <br></br>
          <p1><b>Height: </b>{item.height.meters}m</p1>
          <br></br>
          <p1><b>Boosters: </b>{item.boosters}</p1>
          <br></br>
          <img src={item.flickr_images[0]} alt="RocketImg" width="400" height="400"/>
        </div>
      })}

    </div>
  );
}
/*
<div>
  {ships.map(item => {
    return <>
      <h1>{item.name}</h1>
      <img src={item.image} width="400" height="400"/>
    </>
  })}

</div>*/

export default Shop;
