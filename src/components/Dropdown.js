import React, { useState, useContext } from 'react'
import select from '../icons/select.png'
import sort from '../icons/sort.png'
import { MissionContext } from '../App'



export default function Dropdown() {

    const [isActive, setActive] = useState(false)


    const { 
        handleMissionSort, 
        handleFilterByYear,
        yearList
    } = useContext(MissionContext)



    return (

            <div className="filter-btns-container">

                <div className="dropdown">
                    <button className="btn filter" onClick={e => {setActive(!isActive) }}>
                        <span>Filter by Year</span>
                        <img src={select} />
                    </button>

                    {isActive && (
                        <div className="dropdown-content">

                            {yearList.map(year => (
                                <div className="dropdown-item" key={year} onClick={e => {
                                    handleFilterByYear(year)
                                    setActive(false)
                                }}>
                                    {year}
                                </div>
                            ))}

                        </div>
                    )}

                </div>


                <button className="btn sort" onClick={() => handleMissionSort()}>
                    <span>Sort Descending</span>
                    <img src={sort} />
                </button>
            </div>
    )
}
