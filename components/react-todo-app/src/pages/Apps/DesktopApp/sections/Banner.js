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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgPattern from "assets/images/shapes/pattern-lines.svg";
import laptop from "assets/images/macbook-2.png";

function Banner() {
  return (
    <MKBox
      variant="gradient"
      bgColor="warning"
      position="relative"
      borderRadius="xl"
      mx={{ xs: 2, xl: 3, xxl: 16 }}
      mt={-32}
      py={13}
      px={3}
      sx={{ overflow: "hidden" }}
    >
      <MKBox
        component="img"
        src={bgPattern}
        alt="pattern-lines"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        opacity={0.6}
      />
      <Container sx={{ position: "relative" }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={7} lg={5} py={{ xs: 0, sm: 6 }} mr="auto" position="relative">
            <MKTypography variant="h2" color="white" mb={1}>
              Start building your awesome application
            </MKTypography>
            <MKTypography variant="body1" color="white" mb={6}>
              Elegance is the end result of hard work, not the starting point. Strive to make your
              work so invisible that the reader thinks they could have written what you published.
              Trusted by 5.000+ clients from all around the world.
            </MKTypography>
            <MKButton variant="gradient" color="dark">
              Start now
            </MKButton>
            <MKButton variant="text" color="white" sx={{ ml: 1 }}>
              Read more
            </MKButton>
          </Grid>
          <Grid item xs={12} position="absolute" left="50%" mr={-32} width="75%">
            <MKBox
              component="img"
              src={laptop}
              alt="macbook"
              width="100%"
              display={{ xs: "none", md: "block" }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Banner;
