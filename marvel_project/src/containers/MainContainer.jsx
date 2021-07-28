import React from 'react'
import Comics from '../component/Comics'
import Filter from '../component/Filter'
import Menu from '../component/Menu'

const MainContainer = () =>{
    
    
    
    return(
        <div className='main_container'>
            <div className='header'>
                <Filter />
                <Menu />
            </div>
            <div className='main_content'>
                <Comics />
            </div>

            <div className='footer'>

            </div>
        </div>
    )
}

export default MainContainer