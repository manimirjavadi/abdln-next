import React, { useState } from "react";
import Carousel from "re-carousel";
import IndicatorDots from "../UI/IndicatorDots";
import { MainSlide } from "./slides/MainSlide";
import { Molecule } from "./slides/Molecule";

export const Intro = () => {
  const [currentSlide, setCurrentSlide] = useState("main");
  const [startMainAnimation, setStartMainAnimation] = useState(true);
  const [startMoleculeAnimation, setStartMoleculeAnimation] = useState(false);

  const manageAnimation = (event) => {
    if (event.current.children[0].id !== currentSlide) {
      if (event.current.children[0].id === "molecule") {
        setCurrentSlide("molecule");
        setStartMoleculeAnimation(true);
        setStartMainAnimation(false);
      }
      if (event.current.children[0].id === "main") {
        setCurrentSlide("main");
        setStartMoleculeAnimation(false);
        setStartMainAnimation(true);
      }
    }
  };

  return (
    <Carousel
      auto
      widgets={[IndicatorDots]}
      onTransitionEnd={(event) => {
        manageAnimation(event);
      }}
    >
      <MainSlide id="main" animatorController={startMainAnimation} />

      <Molecule id="molecule" animatorController={startMoleculeAnimation} />

      <div style={{ backgroundColor: "orange", height: "100%" }}>Frame 3</div>
    </Carousel>
  );
};
