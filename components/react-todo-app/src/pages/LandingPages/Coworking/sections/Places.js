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

// Material Kit 2 PRO React components
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";

function Places() {
  const actionProps = {
    type: "internal",
    route: "/pages/landing-pages/coworking",
    color: "dark",
    label: "find more",
  };

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid
          container
          item
          flexDirection="column"
          alignItems="center"
          xs={12}
          lg={6}
          sx={{ textAlign: "center", mx: "auto" }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Co-working"
            container
            circular
            sx={{ mb: 1 }}
          />
          <MKTypography variant="h2" mb={1}>
            Explore our places in London{" "}
          </MKTypography>
          <MKTypography variant="body2" color="text">
            If you can&apos;t decide, the answer is no. If two equally difficult paths, choose the
            one more painful in the short term (pain avoidance is creating an illusion of equality).
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                title="Campus 6"
                description="Website visitors today demand a frictionless user expericence. Applies to mobile applications too."
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image="https://images.unsplash.com/photo-1498677231914-50deb6ba4217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                title="Cozy Spots"
                description="If you're more passionate about founding a business than the business itself technology."
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image="https://images.unsplash.com/photo-1587578932405-7c740a762f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                title="Home Office"
                description="Website visitors today demand a frictionless user expericence — especially when using search."
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image="https://images.unsplash.com/photo-1589884629108-3193400c7cc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                title="Virtual Office"
                description="If you're more passionate about founding a business than the business itself, you can fall into."
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                title="Co-working Spaces"
                description="Smart money is just dumb money that's been through a crash. Business than the business itself."
                action={actionProps}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image="https://images.unsplash.com/photo-1461988625982-7e46a099bf4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                title="Private Space"
                description="Technology is not only the thing that moves the human race forward, but it's the only thing that has."
                action={actionProps}
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
