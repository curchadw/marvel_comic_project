import React,{useEffect, useState} from 'react'
import axios from 'axios'


const Comics = () =>{

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        axios
        .get('https://api.themoviedb.org/3/movie/top_rated?api_key=883a22cb6f6f17c77ce626a6dc3f554a')
        .then(response => {
            setMovies(response.data.results)
        })
        .catch(err =>{ console.error(err)})
    },[])

    
    return(
        
        <div>
           {
               movies.map(movie =>{
                return(<div key={movie.id}>
                <p>{movie.title}</p>   
                </div>)
               })
           }
        </div>
    )
}

export default Comics