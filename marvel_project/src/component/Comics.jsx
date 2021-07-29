import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Comic from './Comic'
import '../App.css';
import Menu from './Menu';


const Comics = () =>{

    const [heroes, setHeroes] = useState([])
    const [error, setError] = useState(null)
    const [isLoaded,setIsLoaded] = useState(false)
    const [query, setQuery] = useState('')
    const [searchParam] = useState('name')

    useEffect(()=>{
        axios
        .get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
        .then(response => {
            setHeroes(response.data)
            setIsLoaded(true)
        },
        
        (error) =>{
            setIsLoaded(true)
            setError(error)
        })
        
    },[])
      const search =(heroes)=>{
        
        return  heroes.filter((hero)=>{
                return searchParam.some(newHero =>
                    {
                    return(
                    hero[newHero]
                        .toString()
                        .toLowerCase()
                        .indexOf(query.toLowerCase()) > -1
                    )
                })
            }) 
            
        
    }

    
    if(error){
        return <div>Error: {error.message}</div>
    } else if(!isLoaded){
        return <div>Loading...</div>
    }else{
        return(
        <div className='container'>
            <div className='header'>
                <input type='text' className='search' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='search'/> 
                <input type='submit' value='search'/>

                <Menu />
            </div>
            <div className ='main'>
                <ul>
                    {search(heroes).heroes.map( hero =>(
                        <Comic hero={hero} />
                    ))}
                </ul>
            </div>
            <div className='footer'>
                
            </div>
        </div>
    
        )
                

    
    
    }
}
export default Comics