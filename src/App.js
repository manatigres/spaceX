import React, {useState, useEffect} from 'react';
import axios from 'axios';
import scss from './CSS/stylesheet.scss'
import app from './CSS/app.css'
import Contacts from './components/contacts';
import Header from './components/Header';
import Image from './components/Image';

const url = 'https://api.spacexdata.com/v3/launches?limit=10'
export const RecipeContext = React.createContext()


export default function App() {

    const [missions, setMissions] = useState()


    useEffect( () =>{
        const getMissions = async () => {
            const missionList =  await axios(url);
            setMissions(missionList.data);
        }
        getMissions()
    }, []);


    console.log(missions)

    
    


    return (
        <RecipeContext.Provider >
            <Header />
            <Image />
            { missions && <Contacts contacts={missions} /> }
        </RecipeContext.Provider>
    )
}
