import React from 'react'
import Mission from './Mission';
const { v4: uuidv4 } = require('uuid');


export default function Contacts({contacts}) {

    const missionElement = contacts.map(mission => {
        return <Mission key={uuidv4()} {...mission} />
    })

    return (
        
        <div className="missions">
            {missionElement}
        </div>
        
        

    )


    /*{return (
        <div >
            {contacts.map((contact) => (
                <div className="missions" key={uuidv4()}>
                        <h5 className="card-title">{contact.flight_number}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{contact.mission_name}</h6>
                        <p className="card-text">{contact.launch_date_utc.slice(0, 4)}</p>
                        <p className="card-text">{contact.rocket.rocket_name}</p>
                    </div>
            ))}
        </div>
    )}*/
};

