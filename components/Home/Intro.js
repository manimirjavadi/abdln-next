import React from "react";
import Carousel from "re-carousel";
import IndicatorDots from "../UI/IndicatorDots";
import { MainSlide } from "./slides/MainSlide";
import { Molecule } from "./slides/Molecule";

export const Intro = () => {
  return (
    <Carousel
      auto
      widgets={IndicatorDots}
      onTransitionEnd={(event) => {
        console.log(event);
      }}
    >
      <MainSlide />

      <Molecule />

      <div style={{ backgroundColor: "orange", height: "100%" }}>Frame 3</div>
    </Carousel>
  );
};
