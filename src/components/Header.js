import React, {useContext} from 'react'
import logo from '../Images/spacex-logo.png'
import refresh from '../icons/refresh.png'
import select from '../icons/select.png'
import sort from '../icons/sort.png'
import { MissionContext } from '../App'


export default function Header() {

    const { handleMissionSort, handleReloadData } = useContext(MissionContext)

    return (
        <>
            <div className="header">
                <div >   
                    <img src={logo} width="178" height="22" alt="xSpace"/>
                    <span className="header-launches-text">LAUNCHES</span>
                </div>

                <div>
                    <button className="btn reload" onClick={() => handleReloadData()}>
                        <span>Reload Data</span>
                        <img src={refresh} />
                    </button>
                </div>
            </div>
            <div className="filter-btns-container">
                <button className="btn filter" >
                    <span>Filter by Year</span>
                    <img src={select} />
                </button>
                <button className="btn sort" onClick={() => handleMissionSort()}>
                    <span>Sort descending</span>
                    <img src={sort} />
                </button>
            </div>
        </>
    )
}
