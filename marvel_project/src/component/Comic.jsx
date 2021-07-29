import React from 'react'

const Comic =({hero})=>{


return (
    <li style={{listStyle:'none'}} key={hero.id}>
                    <img src={hero.images.xs} alt={hero.name} />
                    {hero.name}
    </li>
)

}


export default Comic