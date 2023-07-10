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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Presentation page components
import ExampleCard from "pages/presentation/components/ExampleCard";

// Images
import bgPattern from "assets/images/shapes/pattern-lines.svg";

function AuthPages() {
  // pages images
  const img1 =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/account/sign-up-cover.jpg";
  const img2 =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/account/reset-cover.jpg";
  const img3 =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/account/signin-basic.jpg";

  return (
    <MKBox position="relative" variant="gradient" bgColor="dark" mt={{ xs: 0, lg: 12 }} mx={-2}>
      <MKBox
        component="img"
        src={bgPattern}
        alt="background-pattern"
        position="absolute"
        top={0}
        left={0}
        width={{ xs: "auto", lg: "100%" }}
        height={{ xs: "100%", lg: "auto" }}
        opacity={0.6}
      />
      <Container>
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            lg={4}
            sx={{ my: "auto", py: 6, pr: { xs: 3, lg: 2 }, pl: { xs: 3, lg: 0 } }}
          >
            <MKTypography variant="h2" color="white" mb={3}>
              Account Pages for beautiful webapps
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={2} opacity={0.8}>
              We created many examples for pages like Signup, Signin, Forgot Password, 2FA
              Authentification and so on. Just choose between a Basic Design, an illustration or a
              cover and you are good to go!
            </MKTypography>
            <MKBox display="flex" alignItems="center">
              <MKButton variant="gradient" color="info" sx={{ mt: 3, mb: 2, mr: 1 }}>
                view pages
              </MKButton>
              <MKButton variant="text" color="white" sx={{ mt: 3, mb: 2 }}>
                view signup pages
              </MKButton>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={8} sx={{ pl: { xs: 3, lg: 6 }, pr: { xs: 3, lg: 6 }, pb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4} sx={{ mt: { xs: 0, lg: 6 } }}>
                <Link to="/authentication/sign-up/cover">
                  <ExampleCard image={img1} display="grid" minHeight="max-content" p={0.5} />
                </Link>
              </Grid>
              <Grid item xs={12} lg={4} sx={{ mt: { xs: 0, lg: 6 } }}>
                <Link to="/authentication/reset-password/cover">
                  <ExampleCard image={img2} display="grid" minHeight="max-content" p={0.5} />
                </Link>
              </Grid>
              <Grid item xs={12} lg={4} sx={{ mt: { xs: 0, lg: 6 } }}>
                <Link to="/authentication/sign-in/basic">
                  <ExampleCard image={img3} display="grid" minHeight="max-content" p={0.5} />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AuthPages;
