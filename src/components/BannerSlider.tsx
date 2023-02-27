import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/material";
function BannerSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
  };

  return (
    <Box className="relative mb-9">
      <Slider {...settings} className="home-slider">
        <Box
          sx={{
            width: "100%",
            height: "500px",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "500px",
              background: `url('https://www.danspapers.com/wp-content/uploads/2018/09/iStock-516329534-1.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "opacity(0.6)",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "500px",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "500px",
              background: `url('https://ion-fusion.de/wp-content/uploads/2022/08/MrT-070-scaled.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "opacity(0.6)",
            }}
          ></Box>
        </Box>
      </Slider>
    </Box>
  );
}

export default BannerSlider;
