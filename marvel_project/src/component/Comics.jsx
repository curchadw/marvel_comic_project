import React,{useEffect, useState} from 'react'
import axios from 'axios'


const Comics = () =>{

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [isLoaded,setIsLoaded] = useState(false)

    useEffect(()=>{
        axios
        .get('https://api.themoviedb.org/3/movie/top_rated?api_key=883a22cb6f6f17c77ce626a6dc3f554a')
        .then(response => {
            setMovies(response.data.results)
            setIsLoaded(true)
        })
        .catch(error =>{
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
            {movies.map( movie =>(
                <li style={{listStyle:'none'}} key={movie.id}>{movie.title}</li>
            ))}
        </ul>)
    
    }

    
    
}

export default Comics