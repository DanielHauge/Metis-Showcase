import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg'
import Breadbrumb from './Breadbrumb';


export default () => {

    
    return (
        <div className="Head">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs lg="4" className="Floored"></Col>
                    <Link to="/"><Col md="auto"><img src={logo} className="Site-logo" alt="logo" /></Col></Link>
                    <Col xs lg="4" className="Floored"> <Breadbrumb/></Col>
                </Row>
            </Container>
        </div>
    );
}