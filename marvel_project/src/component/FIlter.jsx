import React,{useEffect, useState} from 'react'
import '../App.css';


const Filter = () =>{


    return(
        <div className='filter_main'>
           <input type='text' placeholder='search' className='search' /> 
           <input type='submit' value='search'/>
        </div>
    )
}

export default Filter