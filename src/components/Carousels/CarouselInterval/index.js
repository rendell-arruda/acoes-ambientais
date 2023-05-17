import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export default function CarouselInterval({
  carouselImg1,
  link1,
  carouselImg2,
  link2,
  carouselImg3,
  link3
}) {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <a href={link1} target="_blank">
          <img className="d-block w-100" src={carouselImg1} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <a href={link2} target="_blank">
          <img
            className="d-block w-100"
            src={carouselImg2}
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <a href={link3} target="_blank">
          <img className="d-block w-100" src={carouselImg3} alt="Third slide" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}
