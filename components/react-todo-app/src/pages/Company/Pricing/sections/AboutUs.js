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

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function AboutUs() {
  const data = [
    {
      icon: "credit_card",
      title: "Global payments in a single integration",
      items: ["120+ global currenices", "Global payment"],
    },
    {
      icon: "support_agent",
      title: "24/7 email, phone and chat support",
      items: ["24/7 support", "Fast responses"],
    },
    {
      icon: "biotech",
      title: "Working with the latest technologies",
      items: ["Custom apps", "Best technologies"],
    },
    {
      icon: "bolt",
      title: "Fast and secure payments over the world",
      items: ["Full time access", "Transparent transactions"],
    },
    {
      icon: "receipt_long",
      title: "Financial reconciliation and reporting",
      items: ["5.000+ archives", "Real-time reporting"],
    },
    {
      icon: "group",
      title: "Developer platform and third-party integrations",
      items: ["Over 100 extensions", "Developer Dashboard"],
    },
  ];

  return (
    <MKBox component="section" py={12} px={1}>
      <Container>
        <Grid container item xs={12} lg={8}>
          <MKTypography variant="h3">Read More About Us</MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="text">
            Pain is what we go through as we become older. We get insulted by others, lose trust for
            those others. We get back stabbed by friends. It becomes harder for us to give others a
            hand.
          </MKTypography>
        </Grid>
        <Grid container sx={{ mt: 6 }}>
          {data.map(({ icon, title, items }) => (
            <Grid key={icon} item xs={12} md={4}>
              <MKBox py={2} pr={2}>
                <MKTypography variant="h3" color="info">
                  <Icon>{icon}</Icon>
                </MKTypography>
                <MKTypography variant="h5" mt={2} mb={3}>
                  {title}
                </MKTypography>
                {items.map((item) => (
                  <MKBox key={item} display="flex" lineHeight={1.25}>
                    <MKTypography variant="body1" color="info">
                      <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                    </MKTypography>
                    <MKBox pl={2}>
                      <MKTypography variant="button" color="text" fontWeight="bold">
                        {item}
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutUs;
