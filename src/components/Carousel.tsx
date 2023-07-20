import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Paintings from "./Paintings";
import { Collection } from "../constants";

type CarouselProps = {
  onSelectedItem: Collection;
};

const Carousel = ({ onSelectedItem }: CarouselProps): JSX.Element => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    focusOnSelect: true,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {onSelectedItem.paintings.map(({ title, image, size }) => (
        <Paintings title={title} image={image} size={size} />
      ))}
    </Slider>
  );
};

export default Carousel;
