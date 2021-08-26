import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Row, Card } from 'react-bootstrap'
import moment from "moment";

function News() {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch("https://corona.askbhunte.com/api/v1/news")
            .then((response) => response.json())
            .then((data) => {
                setNews(data.data)
                console.log(data.data)
            })
    }, [])
    return (
        <div className="News__body">
            {/* <Row xs={1} md={3} className="g-4" style={{ marginTop: "1in", marginBottom: "1in" }}> */}
                {news.map((item) => (
                    <div className='News__Card' style={{ width: '4in' }} >
                        <Card className="View_cont" style={{ width: '700px', height: "600px", margin: '8px' }}>
                        <Card.Img variant="top" style={{height:'300px',width:'600px',marginLeft: 'auto', marginRight: 'auto'}} src={item.image_url} />
                            <Card.Body style={{ width: "3.3in" }}>
                                {/* {item.image} */}    
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Link href={item.url}>Read</Card.Link>    
                                <Card.Text>
                                </Card.Text>
                                <Card.Text>
                                {moment(item.created_on).format("MMMM DD, YYYY")}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    // <div>
                    //         <tr>
                    //             <td>
                    //                 <a href={item.url} target="_blank">
                    //                 <img src={item.image_url} height="100px" width="100px" alt="news-img"/><br/>
                    //                 <h5>{item.title}</h5><br/>
                    //                 <p>{moment(item.created_on).format("MMMM DD, YYYY")}</p>
                    //                 </a>
                    //             </td>
                    //         </tr>
                    // </div>
                ))}
            {/* </Row> */}
        </div>
    )
}

export default News
