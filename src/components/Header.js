import React, { useContext} from 'react'
import logo from '../Images/spacex-logo.png'
import refresh from '../icons/refresh.png'
import { MissionContext } from '../App'
import Dropdown from './Dropdown'


export default function Header() {

    const {  handleReloadData } = useContext(MissionContext)

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

            <Dropdown />

        </>
    )
}
