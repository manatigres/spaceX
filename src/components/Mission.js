import React from 'react'

export default function Mission(props) {

    const {
        flight_number,
        mission_name,
        launch_date_unix,
        rocket
    } = props


    var d = new Date(launch_date_unix*1000);
    const month = d.toLocaleString("en-US", {month: "short"})
    const day = d.toLocaleString("en-US", {day: "numeric"})
    const year = d.toLocaleString("en-US", {year: "numeric"})
    const ending = day.slice(-1)
    let suffix 

    if(ending == '1'){
        suffix = "st"
    } else if(ending == '2'){
        suffix = "nd"
    } else{
        suffix = "th"
    }

    const date = `${day}${suffix} ${month} ${year}`
    
    
    return (
        <div className="missionElement">
                        <span className="mission-number">{`#${flight_number}`}</span>
                        <span className="mission-name">{mission_name}</span>
                        <div className="date-rocket-container">
                            <span className="date">{date}</span>
                            <span className="rocket-name">{rocket.rocket_name}</span>
                        </div>

        </div>
    )
}
