import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Map from '../Map/Map';
import './user.css';
import { AppContext } from '../../App';


export default function User() {
  const [ coord , setCoord ] = useState([])
  const [ searchText, setSearchText ] = useState("")
  const markers = useContext(AppContext)

  console.log(markers)
  return (
    <>
    <div className='userContainer'>
      <Map />
    </div>
    <div >
        <div className='SearchField'>
           <div className='searchContainer'id="searchContainer>">
              <input className='searchInput' id="searchInput" type="text" name="search" 
                  placeholder="Search For Coder..." onChange={()=>{setSearchText(document.getElementById("searchInput").value)}}></input>
            </div>
        </div>
            {console.log(searchText)}
          <div className='groupContainer '>
             {/* {markers.filter(marker=>marker.name.toLowerCase().startsWith(searchText) || marker.base.toLowerCase().startsWith(searchText)  ) */}
             {markers.filter(marker=>marker.name.toLowerCase().startsWith(searchText))

              .map(marker => (
                    // <div key={marker.id} className="characterTile" onClick={() => setDisplay(marker)}>
                    <div className='singleContainer' onClick={() => setCoord(marker.geocode)}>
                      <h3 className='nameStyle'>{marker.name}</h3>
                      <img src= {marker.photo} alt='img' width="90" height="90"/>
                      <p className='pstyle'>Location: {marker.geocode}</p>
                      <p className='pstyle'>Clearance: {marker.clearance}</p>
                      <p className='pstyle'>arrived_on_station: {marker.arrived_on_station}</p>
                      <p className='pstyle'>Base: {marker.installation_id}</p>
                      <p className='pstyle'>Coder?: {marker.i ? true : false}</p>
                      <p className='pstyle'>Civilian?: {marker.is_civilian}</p>
                      <p className='pstyle'>Rank: {marker.rank}</p>
                      <p className='pstyle'>Email: {marker.email}</p>

                    </div>
                    ))}
          </div>
      </div>
    </>


  )
}