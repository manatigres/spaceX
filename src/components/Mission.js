import React from 'react'

export default function Mission(props) {
    return (
        <div className="missionElement">
                        <span className="mission-number">{`#${props.flight_number}`}</span>
                        <span className="mission-name">{props.mission_name}</span>
                        <div className="date-rocket-container">
                            <span className="date">{props.launch_date_utc.slice(0, 4)}</span>
                            <span className="rocket-name">{props.rocket.rocket_name}</span>
                        </div>

        </div>
    )
}
