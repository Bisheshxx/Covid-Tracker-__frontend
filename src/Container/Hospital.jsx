import React, { useEffect } from 'react'
import { useState } from 'react';
import { Table } from 'react-bootstrap';

function Hospital() {
    const [hospital, setHospital] = useState([])
    useEffect(() => {
        fetch("https://corona.askbhunte.com/api/v1/hospitals")
            .then((response) => response.json())
            .then((data) => {
                setHospital(data.data);
                console.log(data.data)
            });
    }, []);
    return (
        <div className='hospital'>
            <Table style={{fontSize:'15px'}}>
                <thead>
                    <tr>
                        <th>Hospital Name</th>
                        <th>Contact</th>
                        <th>Bed</th>
                        <th>ventilators</th>
                        <th>isolation bed</th>
                    </tr>
                </thead>
                {hospital.map((item) => (
                    <tbody style={{fontSize:'10px'}}>
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
