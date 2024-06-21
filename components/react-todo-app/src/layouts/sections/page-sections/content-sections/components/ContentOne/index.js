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
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Images
import bg1 from "assets/images/bg.jpg";
import bg2 from "assets/images/examples/content-1.jpg";
import bg3 from "assets/images/examples/content-2.jpg";
import bg4 from "assets/images/examples/content-3.jpg";
import bg5 from "assets/images/examples/content-4.jpg";
import bg6 from "assets/images/examples/content-5.jpg";

function ContentOne() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={8}
          flexDirection="column"
          alignItems="center"
          mx="auto"
          textAlign="center"
          mb={6}
        >
          <MKBadge
            badgeContent="co-working"
            variant="contained"
            color="info"
            container
            sx={{ mb: 1 }}
          />
          <MKTypography variant="h2" mb={1}>
            Explore our places in London
          </MKTypography>
          <MKTypography variant="body2" color="text">
            If you can&apos;t decide, the answer is no. If two equally difficult paths, choose the
            one more painful in the short term (pain avoidance is creating an illusion of equality).
          </MKTypography>
        </Grid>
        <Grid container spacing={3} minHeight="40vh">
          <Grid item xs={5} sm={4}>
            <MKBox
              width="100%"
              height="100%"
              borderRadius="lg"
              shadow="md"
              sx={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
              }}
            />
          </Grid>
          <Grid item xs={7} sm={3}>
            <MKBox
              width="100%"
              height="100%"
              borderRadius="lg"
              shadow="md"
              sx={{
                backgroundImage: `url(${bg2})`,
                backgroundSize: "cover",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <MKBox
              width="100%"
              height="100%"
              borderRadius="lg"
              shadow="md"
              sx={{
                backgroundImage: `url(${bg3})`,
                backgroundSize: "cover",
              }}
            />
          </Grid>
          <Grid item xs={7} sm={3}>
            <MKBox
              width="100%"
              height="100%"
              borderRadius="lg"
              shadow="md"
              sx={{
                backgroundImage: `url(${bg4})`,
                backgroundSize: "cover",
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <MKBox
              width="100%"
              height="100%"
              borderRadius="lg"
              shadow="md"
              sx={{
                backgroundImage: `url(${bg5})`,
                backgroundSize: "cover",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MKBox
              width="100%"
              height="100%"
              borderRadius="lg"
              shadow="md"
              sx={{
                backgroundImage: `url(${bg6})`,
                backgroundSize: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ContentOne;
