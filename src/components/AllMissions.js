import React from 'react'
import Mission from './Mission';
const { v4: uuidv4 } = require('uuid');


export default function AllMissions({missions}) {

    //Create single mission element
    const missionElement = missions.map(mission => {
        return <Mission key={uuidv4()} {...mission} />
    })

    return (
        
        <div className="missions">
            {missionElement}
        </div>
        
    )
};

