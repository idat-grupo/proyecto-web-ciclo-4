
import React from 'react'
import { Carousel,Row, Col, Container } from 'react-bootstrap'
import SectionBlog from "../components/HomeComponents/SectionBlog";
import SectionContacto from "../components/HomeComponents/SectionContacto";
import SectionMascarilla from "../components/HomeComponents/SectionMascarilla";

import hero1 from '../img/hero-1.jpg'
import hero2 from '../img/hero-2.jpg'
import hero3 from '../img/hero-3.jpg'
import kidsImg from '../img/kids.jpg'

const Home = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={kidsImg}
                alt="Banner-kids"
                />
                <Carousel.Caption>
                <h3>Nueva colección</h3>
                <p>La ropa más cómoda.</p>
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
                <Row className="py-5 ml-auto"> 
                    <Col className=" px-3 py-2" lg={4}>
                        <a>Mujeres</a>
                        <img src={hero1} alt="" className="w-100 h-100"/>
                    </Col>
                    <Col className=" px-3 py-2" lg={4}>
                        <a>Hombres</a>
                        <img src={hero2} alt="" className="w-100 h-100"/>
                    </Col>
                    <Col className=" px-3 py-2" lg={4}>
                        <a>Niños y Niñas</a>
                        <img src={hero3} alt="" className="w-100 h-100"/>
                    </Col>
                    <Col className=" px-3 py-2" lg={4}>
                        <a>Accesorios</a>
                        <img src={hero1} alt="" className="w-100 h-100"/>
                    </Col>
                    <Col className=" px-3 py-2" lg={4}>
                        <a>Bebés</a>
                        <img src={hero3} alt="" className="w-100 h-100"/>
                    </Col>
                    <Col className=" px-3 py-2" lg={4}>
                        <a>Peluches</a>
                        <img src={hero2} alt="" className="w-100 h-100"/>
                    </Col>
                </Row>
            </Container>
        </div>
      <SectionMascarilla />
      <SectionBlog />
      <SectionContacto />
        </>
    )
}

export default Home;
