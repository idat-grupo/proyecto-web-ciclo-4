import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import SectionBlog from "../components/HomeComponents/SectionBlog";
import SectionContacto from "../components/HomeComponents/SectionContacto";
import SectionMascarilla from "../components/HomeComponents/SectionMascarilla";
//import Header from '../components/Header/Header'

const Home = () => {
  return (
    <>
      <SectionMascarilla />
      <SectionBlog />
      <SectionContacto />
    </>
  );
};

export default Home;
