import React, { useState } from 'react'
import './component.css'

function Filter({ filterYear, filterLand, filterLaunch, launch_year }) {
    const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
    const Succesful_Launch = ["true", "false"];
    const Succesful_Landing = ["true", "false"];

    const HandleYearClick = (e) => {
        const year = e.target.getAttribute('val');
        filterYear((prev_year) => (
            prev_year === year ? "" : year
        ))
    };
    const HandleLandClick = (e) => {
        const Land = e.target.getAttribute('val');
        filterLand((prev_land) => {
            return prev_land === Land ? "" : String(Land)
        }
        )
    };
    const HandleLaunchClick = (e) => {
        const launch = e.target.getAttribute('val');
        // console.log(String(launch));
        filterLaunch((prev_launch) => (
            prev_launch === launch ? "" : String(launch)
        ))
    };
    return (
        <div className='filter'>
            <h2>Launch Year </h2>
            <div className="buttons">
                {years.map((year) => (
                    <button
                        key={year}
                        val={year}
                        onClick={HandleYearClick}
                    >{year}</button>
                ))}
            </div>

            <p>Succesful Launch </p>
            <div className="buttons">
                {Succesful_Launch.map((launch) => (
                    <button
                        key={launch}
                        val={launch}
                        onClick={HandleLaunchClick}
                    >{launch}</button>
                ))}
            </div>
            <p>Succesful Landing </p>
            <div className="buttons">
                {Succesful_Landing.map((land) => (
                    <button
                        key={land}
                        val={land}
                        onClick={HandleLandClick}
                    >{land}</button>
                ))}
            </div>

        </div>
    )
}

export default Filter
