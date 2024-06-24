import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Card from "./Card";

const CustomCarousel = () => {
    const responsive = {
        superLargerDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 2000 },
            items: 8
          },
        desktop: {
          breakpoint: { max: 2000, min: 1400 },
          items: 7
        },
        desktopSmall: {
            breakpoint: { max: 1400, min: 1200 },
            items: 6
          },
        tablet: {
          breakpoint: { max: 1200, min: 1050 },
          items: 5
        },
        tabletSmall: {
            breakpoint: { max: 1050, min: 800 },
            items: 4
          },
        tabletSmallSmall: {
            breakpoint: { max: 800, min: 600 },
            items: 3
          },
        mobile: {
          breakpoint: { max: 600, min: 370 },
          items: 2
        },
        mobileSmall: {
            breakpoint: { max: 370, min: 0 },
            items: 1
          }
      };

      return (
        <>
            <div className="work">
                <Carousel responsive={responsive} infinite={true} itemClass="contain">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Carousel>
            </div>
        </>
      );
}

export default CustomCarousel;