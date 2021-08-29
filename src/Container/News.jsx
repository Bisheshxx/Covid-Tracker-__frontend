import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Row, Card } from 'react-bootstrap'
import moment from "moment";
import './News.css'
import { Pagination } from 'antd';

const News = () => {
    const [news, setNews] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState([]);
    const pageSize = 12;
    useEffect(() => {
        fetch("https://corona.askbhunte.com/api/v1/news")
            .then((response) => response.json())
            .then((data) => {
                setNews(data.data)
                console.log(data.data)
            })
        console.log(news)
    }, [])
    const handlePaginationChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        let newArray;
        let maxCountIndex = 11;

        if (news && news.length > 0) {
            // ((1-1)*12=0, 11*1+1=12)=(0,12)
            newArray = news.slice(
                (currentPage - 1) * pageSize,
                maxCountIndex * currentPage + currentPage
            );
        }

        setPaginatedData(newArray);

        return () => {
            // cleanup
        };
    }, [news, currentPage]);



    return (
        <div className="News__Body">
            <div className="News__Banner container-lg">

            </div>
            <div className="News__body">
                <Row xs={1} md={4} className="g-4" style={{ marginTop: "1in", marginBottom: "1in" }}>
                    {news && news.length > 0 && news.map((item) => (
                        <div className='News__Card' >
                            <Card className="View_cont" style={{ width: '400px', height: "400px", margin: '8px' }}>
                                <Card.Img variant="top" style={{ height: '200px', objectFit: "contain", marginLeft: 'auto', marginRight: 'auto', marginTop: '5px' }} src={item.image_url} />
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
                
            </div>

            hi
        </div>
    )

}

export default News
