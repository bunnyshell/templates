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
import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";

// Images
import image from "assets/images/annie-spratt.jpg";
import author from "assets/images/marie.jpg";

function CardImageInside() {
  return (
    <MKBox pt={6} pb={3} px={3}>
      <Grid container item xs={12} lg={6} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
        <DefaultBlogCard
          image={image}
          category={{ color: "warning", label: "hub" }}
          title="Shared Coworking"
          description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
          author={{
            image: author,
            name: "Mathew Glock",
            date: "Posted on 28 February",
          }}
          action={{
            type: "internal",
            route: "/sections/page-sections/general-cards",
          }}
          raised={false}
        />
      </Grid>
    </MKBox>
  );
}

export default CardImageInside;
