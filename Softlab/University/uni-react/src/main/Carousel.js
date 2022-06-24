import image from './images/GalileoGalilei.jpg';
import newton from './images/IsaacNewton.jpg'
import tesla from './images/NicolasTesla.jpeg';
import {Carousel} from "react-bootstrap";

export default function ImageCarousel() {
    return (
        <Carousel className={'bg-dark rounded'}>
            <Carousel.Item interval={5000}>
                <img
                    style={{float: "left"}}
                    className="d-block w-25"
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>გალილეო გალილეი<div>(1564-1585)</div></h3>
                    <p>არ შემხვედრია ადამიანი იმდენად სულელი, რომ მისგან რაიმე არ
                        მესწავლა.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-25"
                    src={newton}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>ისააკ ნიუტონი<div>(1643-1727)</div></h3>
                    <p>გამოცდილება არ არის ის, რაც შენთან ხდება; ეს არის ის, რასაც აკეთებ
                        იმით, რაც შენს თავს ხდება.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-25"
                    src={tesla}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>ნიკოლა <div>(1856-1943)</div></h3>
                    <p>მას შემდეგ 80 წელი გავიდა და მე ჯერ კიდევ ვერ გამიცია პასუხი საკუთარ კითხვაზე: რა არის
                        ელექტროენერგია.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}