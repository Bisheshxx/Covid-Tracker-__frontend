import React from 'react'
import { Table } from 'react-bootstrap'

const Tryhospital=({hospital})=> {
    return (
        <div >
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

export default Tryhospital
