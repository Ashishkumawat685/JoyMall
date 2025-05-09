import React, { useState } from "react";
import { Header } from "../Header/Header";
import { Slider } from "./Home/SwiperSlider/Slide";

function Home() {
  // home slider width function .........................
  const [SlideWidth, setSlideWidth] = useState(false);

  return (
    <>
      <Header setSlideWidth={setSlideWidth} SlideWidth={SlideWidth} />
      <Slider SlideWidth={SlideWidth} />
    </>
  );
}

export { Home };
