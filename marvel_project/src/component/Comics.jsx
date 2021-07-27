import React,{useEffect, useState} from 'react'
import axios from 'axios'


const Comics = () =>{

    const [hero, setHero] = useState([])

    useEffect(async ()=>{
        axios
        .get(`https://superheroapi.com/api/`)
        .then(response => setHero(response.data))
        
    },[])

    
    return(
        
        <div>
           <ul>
              <code>{JSON.stringify(hero)}</code>
           </ul> 
        </div>
    )
}

export default Comics