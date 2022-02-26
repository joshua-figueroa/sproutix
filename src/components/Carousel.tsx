import { Carousel } from 'react-bootstrap'
import "styles/carousel.scss"

const CustomCarousel = () => (
    <Carousel indicators={false} interval={10000000}>
        <Carousel.Item>
            <img
                src="https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_1280.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h1>MADE FOR THOSE WHO DO</h1>
                <span>Photos by Saepul Rohman</span>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                src="https://cdn.pixabay.com/photo/2016/11/22/23/45/acoustic-1851248_1280.jpg"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h1>MADE FOR THOSE WHO DO</h1>
                <span>Photos by Saepul Rohman</span>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)

export default CustomCarousel