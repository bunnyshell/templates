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

import { useRef, useState } from "react";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Steps() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [swiperEl, setSwiperEl] = useState(null);

  const slideTo = (index) => swiperEl && swiperEl.slideTo(index);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1609365635346-524d0024684f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80",
      label: "First Step",
      title: "Give your best",
      description: "Give your best to create something unique with high impact.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1602781975725-cab34bd38d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      label: "Second Step",
      title: "Plan your work",
      description: "As we live, our hearts turn colder. Cause pain is what we go through.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=974&q=80",
      label: "Third Step",
      title: "Follow your dreams",
      description: "As we live, our hearts turn colder. Cause pain is what we go through.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1579523616974-c2b09289c27e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80",
      label: "Fourth Step",
      title: "Never give up",
      description: "Everyone’s born confident, and everything’s taken away from you.",
    },
  ];

  const steps = [
    {
      number: "01",
      label: "Give your best",
    },
    {
      number: "02",
      label: "Plan your",
    },
    {
      number: "03",
      label: "Follow your dreams",
    },
    {
      number: "04",
      label: "Never give up",
    },
  ];

  // Swiper navigation buttons styles
  const navigationStyles = {
    opacity: 0.5,
    cursor: "pointer",
    transition: "opacity 0.15s ease",

    "&:hover, &:focus": {
      opacity: 1,
    },
  };

  return (
    <MKBox component="section" py={12} position="relative">
      <Container>
        <Swiper
          onInit={(swiper) => {
            setSwiperEl(swiper);

            const { navigation: nav } = swiper.params;
            const { navigation } = swiper;

            nav.prevEl = navigationPrevRef.current;
            nav.nextEl = navigationNextRef.current;
            navigation.init();
            navigation.update();
          }}
          autoplay={{ delay: 5000 }}
          speed={800}
          spaceBetween={0}
          slidesPerView={1}
          allowTouchMove={false}
          loop
        >
          {slides.map(({ image, label, title, description }) => (
            <SwiperSlide key={label}>
              <Grid container spacing={3} alignItems="center" sx={{ mb: { xs: 6, md: 0 } }}>
                <Grid item xs={12} md={5} ml={{ xs: 0, lg: "auto" }}>
                  <MKBox p={2}>
                    <MKBox
                      component="img"
                      src={image}
                      alt={title}
                      width="100%"
                      borderRadius="xl"
                      maxHeight="37.5rem"
                    />
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={5} mr={{ xs: 0, lg: "auto" }} position="relative">
                  <MKTypography
                    component="h6"
                    variant="button"
                    opacity={0.7}
                    textTransform="uppercase"
                    fontWeight="bold"
                  >
                    {label}
                  </MKTypography>
                  <MKTypography
                    variant="h1"
                    fontWeight="bold"
                    sx={{
                      fontSize: ({ typography: { d3, d4 } }) => ({
                        xs: d4.fontSize,
                        lg: d3.fontSize,
                      }),
                    }}
                  >
                    {title}
                  </MKTypography>
                  <MKTypography variant="body1" my={3}>
                    {description}
                  </MKTypography>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
          <MKBox
            display="flex"
            position="absolute"
            bottom={{ xs: 0, lg: "10%" }}
            right="5%"
            zIndex={2}
          >
            <MKTypography
              variant="h2"
              ref={navigationPrevRef}
              color="dark"
              mr={{ xs: 8, md: 2, lg: 8 }}
              sx={navigationStyles}
            >
              <MKBox className="fas fa-chevron-left" />
            </MKTypography>
            <MKTypography variant="h2" ref={navigationNextRef} color="dark" sx={navigationStyles}>
              <MKBox className="fas fa-chevron-right" />
            </MKTypography>
          </MKBox>
        </Swiper>
        <Grid container mt={16}>
          {steps.map(({ number, label }, index) => (
            <Grid key={label} item xs={6} lg={3} textAlign="center">
              <MKTypography
                variant="body1"
                color="success"
                fontWeight="bold"
                pl={2}
                textGradient
                sx={{ fontFamily: ({ typography: { h1 } }) => h1.fontFamily, cursor: "pointer" }}
                onClick={() => slideTo(index + 1)}
              >
                <MKBox component="span">{number}</MKBox>
                <MKBox component="span" ml={1}>
                  {label}
                </MKBox>
              </MKTypography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Steps;
