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
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import SimpleInfoCard from "examples/Cards/InfoCards/SimpleInfoCard";

function Information() {
  return (
    <MKBox component="section" py={{ xs: 6, md: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center">
          <Grid
            item
            xs={12}
            md={4}
            sx={{ ml: { xs: 0, md: "auto" }, mr: { xs: 0, md: 6 }, mb: { xs: 4, md: 0 } }}
          >
            <Stack spacing={{ xs: 4, md: 8 }}>
              <SimpleInfoCard
                icon="payment"
                title="Modular Components"
                description="The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever."
              />
              <SimpleInfoCard
                icon="insights"
                title="Great Features"
                description="People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest."
              />
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ mr: { xs: 0, md: "auto" }, ml: { xs: 0, md: 6 }, mb: { xs: 4, md: 0 } }}
          >
            <Stack spacing={{ xs: 4, md: 8 }}>
              <SimpleInfoCard
                icon="access_alarms"
                title="Awesome Support"
                description="The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. What else could rust?"
              />
              <SimpleInfoCard
                icon="sentiment_satisfied"
                title="Modern Interface"
                description="If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration."
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
