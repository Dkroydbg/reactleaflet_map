"use client"


import { MapContainer, TileLayer, Marker, Popup,Tooltip,CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import refindata from './data.json'
import respiredata from './respirer.json'
import { useState,useEffect } from "react";

 


const Map = (props) => {
  // const [idno,setidno]=useState();
  // const [chvalue,setchvalue]=useState();

  // console.log("props in map ", props.chData.chvalue)
  
  // useEffect(()=>{
    
    

  //   try {
  //   const idn = JSON.parse(window.localStorage.getItem('item1'));
  //   const chval = JSON.parse(window.localStorage.getItem('item2'));
  //   console.log(idn);

  //   if(idn){
  //     setidno(idn);
  //     console.log(idn);
  //   }
  //   if(chval){  
  //     setchvalue(chval);
  //     console.log(chval);
  //   }
  //   } catch (err) {
  //     console.log('Error: ', err.message);
  //   }
       
  // },[idno,chvalue])  
  
  return (
    
    <MapContainer 
      center={[25.43, 86.05]}
      zoom={4}
      scrollWheelZoom={false}
      style={{  height: "500px", width: "400px",borderRadius:"14px",  border: "2px solid black", marginTop:"3px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* {props==null ?():()} */}
      {refindata.map((marker)=>(
        <Marker key={marker.id} position={[marker.Latitude,marker.Longitude]} draggable={true} animate={true}>
        <Popup><>
        <h5 className="card-title text-center">CH4 Value</h5>
        <br></br>
              <label><small><b>Refinery:</b></small> {marker.Refinery}</label>
              <hr></hr>
              <label><small><b>CH4:</b></small> {props.chvalue}</label>
              <hr></hr>
              <lable><small><b>ID:</b></small> {props.idno}</lable>
              {/*  <p className="card-text">{" "} {chvalue}{", "}{idno}</p> */}
        </></Popup>
      </Marker>
      ))}

      {refindata.map((marker)=>(
        <div key={marker.id}>
        {respiredata.map((resdata)=>(
          resdata.id==marker.id && resdata.id==props.chData.idno ?(<Marker key={marker.id} position={[marker.Latitude,marker.Longitude]}  draggable={true} animate={true}>
            <Popup>
              {/* {marker.Refinery}{" "} {chvalue}{", "}{idno} */}
              <label><small><b>Refinery:</b></small> {marker.Refinery}</label>
              <hr></hr>
              <label><small><b>CH4:</b></small> {props.chData.chvalue}</label>
              <hr></hr>
              <lable><small><b>ID:</b></small> {props.chData.idno}</lable>
              {/* <p className="card-text">{" "} {chvalue}{", "}{idno}</p> */}
              </Popup>
            {/* <CircleMarker center={[marker.Latitude,marker.Longitude]} radius={20}>
            
            <Tooltip direction="center"  permanent>
                       <span>{props.chData.chvalue}</span>
            </Tooltip>
            </CircleMarker> */}
            </Marker>): null
        ))}
        </div>
      ))}

      
    </MapContainer>
  );
};

export default Map;


{/* <CircleMarker center={[51.505, -0.099]} number={10}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
</CircleMarker> */}