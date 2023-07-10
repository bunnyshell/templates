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
import Divider from "@mui/material/Divider";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React components
import MiniReviewCard from "examples/Cards/ReviewCards/MiniReviewCard";

// Images
import review1 from "assets/images/team-3.jpg";
import review2 from "assets/images/marie.jpg";
import review3 from "assets/images/team-2.jpg";
import apple from "assets/images/logos/gray-logos/logo-apple.svg";
import facebook from "assets/images/logos/gray-logos/logo-facebook.svg";
import behance from "assets/images/logos/gray-logos/logo-behance.svg";
import spotify from "assets/images/logos/gray-logos/logo-spotify.svg";
import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
import pinterest from "assets/images/logos/gray-logos/logo-pinterest.svg";

function Testimonials() {
  return (
    <MKBox py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          justifyContent="center"
          mx="auto"
          sx={{ textAlign: "center" }}
        >
          <MKTypography variant="h2" color="warning" textGradient>
            What random people
          </MKTypography>
          <MKTypography variant="h2" mb={2}>
            Think about us
          </MKTypography>
          <MKTypography variant="body2" color="text">
            That&apos;s the main thing people are controlled by! Thoughts- their perception of
            themselves!{" "}
          </MKTypography>
        </Grid>
        <Grid container spacing={3} mt={8}>
          <Grid item xs={12} md={8} lg={4}>
            <MiniReviewCard
              review="If you have the opportunity to play this game of life you need to appreciate every moment."
              author={{ image: review1, name: "Mathew Glock", date: "Posted on 28 February" }}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4}>
            <MiniReviewCard
              color="warning"
              review="If you have the opportunity to play this game of life you need to appreciate every moment."
              author={{ image: review2, name: "Mathew Glock", date: "Posted on 28 February" }}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4}>
            <MiniReviewCard
              review="If you have the opportunity to play this game of life you need to appreciate every moment."
              author={{ image: review3, name: "Mathew Glock", date: "Posted on 28 February" }}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3}>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={apple} alt="apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebook} alt="facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={behance} alt="behance" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={spotify} alt="spotify" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={coinbase} alt="coinbase" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={pinterest} alt="pinterest" width="100%" opacity={0.6} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Testimonials;
