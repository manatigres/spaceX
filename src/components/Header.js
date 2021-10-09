import React from 'react'
import logo from '../Images/spacex-logo.png'
import refresh from '../icons/refresh.png'
import select from '../icons/select.png'
import sort from '../icons/sort.png'


export default function Header() {
    return (
        <>
            <div className="header">
                <div >   
                    <img src={logo} width="178" height="22" alt="xSpace"/>
                    <span className="header-launches-text">LAUNCHES</span>
                </div>

                <div>
                    <button className="btn reload">
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
                <button className="btn sort">
                    <span>Sort descending</span>
                    <img src={sort} />
                </button>
            </div>
        </>
    )
}
