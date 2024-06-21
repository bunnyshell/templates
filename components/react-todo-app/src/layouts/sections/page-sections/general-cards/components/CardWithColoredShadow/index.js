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
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import image from "assets/images/products/product-1-min.jpg";

function CardWithColoredShadow() {
  return (
    <MKBox pt={6} pb={3} px={3}>
      <Grid container item xs={12} lg={6} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
        <TransparentBlogCard
          image={image}
          title="MateLabs mixes machine learning with IFTTT"
          description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
          action={{
            type: "internal",
            route: "/sections/page-sections/general-cards",
            color: "info",
            label: "Read More",
          }}
        />
      </Grid>
    </MKBox>
  );
}

export default CardWithColoredShadow;
