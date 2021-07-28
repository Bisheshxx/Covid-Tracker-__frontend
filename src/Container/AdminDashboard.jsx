import React from 'react'
import { PersonIcon, EventIcon, MonetizationOnIcon, SettingsIcon } from '@material-ui/icons';
import './admindashboard.css'
import { Admin, fetchUtils, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import Userlist from '../Container/Userlist'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav, Item, Tab, Table } from 'react-bootstrap'
import EventList from './EventList';

function AdminDashboard() {
    const token = localStorage.getItem("token");    
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">User</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Donations</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            
                                <Userlist></Userlist>
                                
                        </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <EventList></EventList>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                Donations
                            </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>

            )
}

            export default AdminDashboard
