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
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Coworking page component
import AboutUsOption from "pages/LandingPages/Coworking/components/AboutUsOption";

function AboutUs() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container>
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              Read More About Us
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              Pain is what we go through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes harder for us to give
              others a hand.
            </MKTypography>
            <MKTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              More about us
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <AboutUsOption
                icon="mediation"
                content={
                  <>
                    It becomes harder for us to give others a hand.
                    <br />
                    We get our heart broken by people we love.
                  </>
                }
              />
              <AboutUsOption
                icon="settings_overscan"
                content={
                  <>
                    As we live, our hearts turn colder.
                    <br />
                    Cause pain is what we go through as we become older.
                  </>
                }
              />
              <AboutUsOption
                icon="token"
                content={
                  <>
                    When we lose family over time.
                    <br />
                    What else could rust the heart more over time? Blackgold.
                  </>
                }
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutUs;
