import React, {useState, useEffect} from 'react';
import axios from 'axios';
import scss from '../CSS/stylesheet.scss'
import app from '../CSS/app.css'
import AllMissions from './AllMissions';
import Header from './Header';
import Image from './Image';

const url = 'https://api.spacexdata.com/v3/launches'
export const MissionContext = React.createContext()
let sort_ascending = false
let originalMissionList
let yearList = []



export default function App() {

    const [missions, setMissions] = useState()

    //get data
    useEffect( () =>{
        const getMissions = async () => {
            try{
                const missionList =  await axios(url);
                setMissions(missionList.data);
                originalMissionList = [...missionList.data]
                createYearList()
            } catch (e) {
                console.log(e)
            }
        }
        getMissions()
    }, []);

    //useContext variable    
    const MissionContextValue = {
        handleMissionSort,
        handleReloadData,
        handleFilterByYear,
        yearList
      }

    //sort by date
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
    
    //reload data
    function handleReloadData() {
        setMissions(originalMissionList)
        sort_ascending = false
    }

    //filter by year
    function handleFilterByYear(year){
        setMissions(originalMissionList.filter(mission => mission.launch_year == year))
    }

    //get launch date
    function createYearList() {
        for(let year of originalMissionList){
            yearList.includes(year.launch_year) ? console.log('Already included') : yearList.push(year.launch_year)
        }
    }



    return (
        <MissionContext.Provider value={MissionContextValue}>
            <Header />
            <Image />
            { missions && <AllMissions missions={missions} /> }
        </MissionContext.Provider>
    )
}
