import React, {useState, useEffect} from 'react';
import axios from 'axios';
import scss from '../CSS/stylesheet.scss'
import app from '../CSS/app.css'
import Contacts from './contacts';
import Header from './Header';
import Image from './Image';

const url = 'https://api.spacexdata.com/v3/launches'
export const MissionContext = React.createContext()
let sort_ascending = false
let originalMissionList
let yearList = []



export default function App() {

    const [missions, setMissions] = useState()

    useEffect( () =>{
        const getMissions = async () => {
            const missionList =  await axios(url);
            setMissions(missionList.data);
            originalMissionList = [...missionList.data]
            createYearList()
        }
        getMissions()
    }, []);

    
    const MissionContextValue = {
        handleMissionSort,
        handleReloadData,
        handleFilterByYear,
        yearList
      }

    function handleMissionSort() {
        let new_arr = [...missions]

        if(sort_ascending == false){
            new_arr.sort((a, b) => {
                return b.launch_date_unix - a.launch_date_unix;
            })
            sort_ascending = true
        }else{
            new_arr.sort((a, b) => {
                return a.launch_date_unix - b.launch_date_unix;
            })
            sort_ascending = false
        }
        
        setMissions(new_arr)
        
    }
    
    function handleReloadData() {
        setMissions(originalMissionList)
        sort_ascending = false
    }

    function handleFilterByYear(year){
        setMissions(originalMissionList.filter(mission => mission.launch_year == year))
    }


    function createYearList() {
        for(let year of originalMissionList){
            yearList.includes(year.launch_year) ? console.log('Already included') : yearList.push(year.launch_year)
        }
    }



    return (
        <MissionContext.Provider value={MissionContextValue}>
            <Header />
            <Image />
            { missions && <Contacts contacts={missions} /> }
        </MissionContext.Provider>
    )
}
