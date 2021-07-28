import React,{useEffect, useState} from 'react'
import axios from 'axios'


const Comics = () =>{

    const [heroes, setHeroes] = useState([])
    const [error, setError] = useState(null)
    const [isLoaded,setIsLoaded] = useState(false)

    useEffect(()=>{
        axios
        .get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
        .then(response => {
            setHeroes(response.data.results)
            setIsLoaded(true)
        },
        
        (error) =>{
            setIsLoaded(true)
            setError(error)
        })
        
    },[])

    
    if(error){
        return <div>Error: {error.message}</div>
    } else if(!isLoaded){
        return <div>Loading...</div>
    }else{
        return(<ul>
            {heroes.map( hero =>(
                <li style={{listStyle:'none'}} key={hero.id}>{hero.name}</li>
            ))}
        </ul>)
    
    }

    
    
}

export default Comics