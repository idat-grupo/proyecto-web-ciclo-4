import React from 'react'
import { Carousel, Row, Col, Container } from 'react-bootstrap'
//import Header from '../components/Header/Header'

import hero1 from '../img/hero-1.jpg'
import hero2 from '../img/hero-2.jpg'
import hero3 from '../img/hero-3.jpg'

const Home = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={hero1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={hero2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                
                className="d-block w-100"
                src={hero3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <div className="seccion-categorias">
            <Container fluid>
                <Row className="py-5"> 
                    <Col className=" px-4 py-2" lg={4}><img src={hero1} alt="" className="w-100 h-100"/></Col>
                    <Col className=" px-4 py-2" lg={4}><img src={hero2} alt="" className="w-100 h-100"/></Col>
                    <Col className=" px-4 py-2" lg={4}><img src={hero3} alt="" className="w-100 h-100"/></Col>
                    </Row>
            </Container>
        </div>
        </>
    )
}

export default Home
