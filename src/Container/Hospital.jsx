import React from 'react'
import { useState } from 'react'
import { Table } from 'react-bootstrap'
import './Hospital.css'

const Hospital = ({ hospital }) => {
    const[search,setSearch]=useState("")
    return (
        <div className='hospital__body'>
            <div className="hospital__header">
                <h1>Hospitals Capacity</h1>
                <input id='hospital__search' type='text' onChange={(e)=>{setSearch(e.target.value)}} placeholder='Search...'/>
            </div>

            <Table responsive="sm" style={{ fontSize: '20px' }}>
                <thead style={{ background: 'black', color: 'white', borderRadius: '7px' }} >
                    <tr>
                        <th>Hospital Name</th>
                        <th>Contact</th>
                        <th>Bed</th>
                        <th>ventilators</th>
                        <th>isolation bed</th>
                    </tr>
                </thead>
                {hospital && hospital.length > 0 && hospital.filter((item)=>{
                    if(search==""){
                        return item
                    }
                    else if(item.name.toLowerCase().includes(search.toLowerCase())){
                        return item
                    }
                }).map((item) => (
                    <tbody style={{ fontSize: '15px' }}>
                        <tr>
                            <td>
                                {item.name}
                                <br></br>
                                {item.address}
                            </td>
                            <td>{item.phone}</td>
                            <td>{item.capacity.beds}</td>
                            <td>{item.capacity.ventilators}</td>
                            <td>{item.capacity.ventilators}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    )
}

export default Hospital
