import React from "react";
import CarouselImg1 from "../assets/Carousel111.jpg";
import CarouselImg2 from "../assets/carousel222.jpg";
import CarouselImg3 from "../assets/carousel3333.jpg";
import { UncontrolledCarousel } from "reactstrap";
const MyCarousel = () => {
  return (
    <>
      <UncontrolledCarousel
        items={[
          {
            // altText: "Slide 1",
            // caption: "Slide 1",
            key: 1,
            src: CarouselImg1,
          },
          {
            // altText: "Slide 2",
            // caption: "Slide 2",
            key: 2,
            src: CarouselImg2,
          },
          {
            // altText: "Slide 3",
            // caption: "Slide 3",
            key: 3,
            src: CarouselImg3,
          },
        ]}
      />
    </>
  );
};
export default MyCarousel;
