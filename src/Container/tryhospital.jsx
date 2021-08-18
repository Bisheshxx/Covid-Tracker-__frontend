import React from 'react'

const Tryhospital=({hospital})=> {
    return (
        <div >
            {hospital.map(item=>(
                <h1 style={{fontSize:'10px'}}>{item.name}</h1>
            ))}
        </div>
    )
}

export default Tryhospital
