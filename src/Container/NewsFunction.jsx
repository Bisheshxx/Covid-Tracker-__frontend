import React from 'react'
import { Card } from '@material-ui/core'
import moment from 'moment'
import { Row } from 'react-bootstrap'
const NewsFunction=({news})=>{
    return(
        <>
        <Row xs={1} md={4} className="g-4" style={{ marginTop: "1in", marginBottom: "1in" }}>
                {news && news.length>0 && news.map((item) => (
                    <div className='News__Card' >
                        <Card className="View_cont" style={{ width: '400px', height: "400px", margin: '8px' }}>
                        <Card.Img variant="top" style={{height:'200px',objectFit: "contain",marginLeft: 'auto', marginRight: 'auto', marginTop:'5px'}} src={item.image_url} />
                            <Card.Body style={{ width: "3.3in" }}>
                                {/* {item.image} */}    
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Link href={item.url}>Read</Card.Link>    
                                <Card.Text><b>Published: </b>
                                {moment(item.created_on).format("MMMM DD, YYYY")}
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted"><b>Source: </b>{item.source}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Row>
        </>
    )
}
export default NewsFunction