import React from 'react';
import {Container, Carousel} from 'react-bootstrap';
import slideShow from '../data/slideShow';

const Banner = () => {
  return (
    <Container fluid className="p-0">
      <Carousel fade>
        {slideShow.map((item,idx)=>(
          <Carousel.Item key={idx}>
            <img className="" src={require(`../asset/${item.img}`)} alt="" />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.info}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        
      </Carousel>
    </Container>
  )
};

export default Banner;