import React, { useState, useEffect } from 'react'
import './component.css'

function Card({ item }) {
    return (
        <div className='card'>
            <img src={item.links.mission_patch} alt="" />
            <h3>{item.mission_name} #{item.flight_number}</h3>
            <h3>Mission Ids: {item.mission_id}</h3>
            <h3>Succesfull Launch: {item.launch_success ? "true" : "false"}</h3>
            <h3>Succesfull Landing: {item.launch_success ? "true" : "false"}</h3>
            <h3>Launch Year: {item.launch_year}</h3>
        </div>
    )
}

export default Card
