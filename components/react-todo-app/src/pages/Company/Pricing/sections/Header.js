/*
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";

// Pricing page components
import SliderHeader from "pages/Company/Pricing/components/Header";

// Images
import bg1 from "assets/images/bg2.jpg";
import bg2 from "assets/images/bg.jpg";
import bg3 from "assets/images/dg1.jpg";

function Header() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <Swiper
      autoplay={{ delay: 5000 }}
      speed={800}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop
    >
      <SwiperSlide>
        <SliderHeader
          image={bg1}
          label="Pricing Plans"
          title="Work with the rockets"
          description="Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status."
          cards={[
            {
              variant: "gradient",
              color: "info",
              icon: "shuffle",
              title: "Netflix's 'Shuffle Play' feature",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
            {
              variant: "contained",
              color: "info",
              icon: "redeem",
              title: "Landbot closes $8M Series",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
            {
              variant: "contained",
              color: "info",
              icon: "bookmarks",
              title: "Brave web browser",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
          ]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderHeader
          image={bg2}
          label="Our Team"
          title="Work with the best"
          description="Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can’t have both."
          cards={[
            {
              variant: "contained",
              color: "primary",
              icon: "shuffle_on",
              title: "Netflix's 'Shuffle Play' feature",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
            {
              variant: "gradient",
              color: "primary",
              icon: "beenhere",
              title: "Landbot closes $8M Series",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
            {
              variant: "contained",
              color: "primary",
              icon: "ballot",
              title: "Brave web browser",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
          ]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderHeader
          image={bg3}
          label="Office Places"
          title="Work from home"
          description="You’re spending time to save money when you should be spending money to save time."
          cards={[
            {
              variant: "contained",
              color: "error",
              icon: "tune",
              title: "Netflix's 'Shuffle Play' feature",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
            {
              variant: "contained",
              color: "error",
              icon: "settings_suggest",
              title: "Landbot closes $8M Series",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
            {
              variant: "gradient",
              color: "error",
              icon: "compare",
              title: "Brave web browser",
              description:
                "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
            },
          ]}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Header;
