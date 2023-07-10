/* eslint-disable no-param-reassign */
/**
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
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function NewsletterTwo() {
  return (
    <MKBox component="section" py={20}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={4}
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          mx="auto"
        >
          <MKBox
            width="3rem"
            height="3rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            variant="gradient"
            bgColor="warning"
            color="white"
            borderRadius="lg"
            coloredShadow="warning"
            mx="auto"
            mb={3}
          >
            <Icon>person</Icon>
          </MKBox>
          <MKTypography variant="h3" mb={1}>
            Subscribe
          </MKTypography>
          <MKTypography variant="body2" color="text">
            This is the paragraph where you can write more details about your product.
          </MKTypography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          justifyContent="center"
          mx="auto"
          mt={6}
        >
          <MKBox component="form" method="" action="">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <MKInput label="Your Email..." fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <MKButton variant="gradient" color="warning" fullWidth sx={{ height: "100%" }}>
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default NewsletterTwo;
