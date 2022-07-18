import React, { useState } from "react";
import Carousel from "re-carousel";
import IndicatorDots from "../UI/IndicatorDots";
import Buttons from "../UI/carouselButton";
import { MainSlide } from "./slides/MainSlide";
import { Molecule } from "./slides/Molecule";
import { Video } from "./slides/Video";

export const Intro = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState("molecule");
  const [startMainAnimation, setStartMainAnimation] = useState(false);
  const [startMoleculeAnimation, setStartMoleculeAnimation] = useState(true);
  const [startVideoAnimation, setVideoAnimation] = useState(false);

  const manageAnimation = (event) => {
    if (event.current.children[0].id !== currentSlide) {
      if (event.current.children[0].id === "molecule") {
        setCurrentSlide("molecule");
        setStartMoleculeAnimation(true);
        setStartMainAnimation(false);
        setVideoAnimation(false);
      }
      if (event.current.children[0].id === "main") {
        setCurrentSlide("main");
        setStartMoleculeAnimation(false);
        setStartMainAnimation(true);
        setVideoAnimation(false);
      }
      if (event.current.children[0].id === "video") {
        setCurrentSlide("video");
        setStartMainAnimation(false);
        setStartMoleculeAnimation(false);
        setVideoAnimation(true);
      }
    }
  };

  return (
    <Carousel
      auto
      widgets={[IndicatorDots, Buttons]}
      onTransitionEnd={(event) => {
        manageAnimation(event);
      }}
    >
      <Molecule
        id="molecule"
        animatorController={startMoleculeAnimation}
        text={slides[0]?.content}
        title={slides[0].title}
      />

      <MainSlide
        id="main"
        animatorController={startMainAnimation}
        text={slides[1]?.content}
        title={slides[1].title}
      />

      <Video id="video" animatorController={startVideoAnimation} />
    </Carousel>
  );
};
