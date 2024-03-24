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
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import SimplePricingCard from "examples/Cards/PricingCards/SimplePricingCard";

function CardPricing() {
  return (
    <MKBox pt={6} pb={3} px={3}>
      <Grid container item xs={12} lg={6} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
        <SimplePricingCard
          variant="gradient"
          color="dark"
          title="Premium"
          description="Free access for 200 members"
          price={{ value: "$499", type: "year" }}
          action={{ type: "internal", route: "/", label: "buy now" }}
          specifications={[
            "Complete documentation",
            "Working materials in Sketch",
            "20GB cloud storage",
            "100 team members",
          ]}
        />
      </Grid>
    </MKBox>
  );
}

export default CardPricing;
