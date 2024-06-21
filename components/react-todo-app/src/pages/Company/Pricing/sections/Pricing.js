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

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";

// Imags
const bgImage =
  "https://images.unsplash.com/photo-1467541473380-93479a5a3ffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2246&amp;q=80";

function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabType, setTabType] = useState("monthly");

  const handleTabType = ({ currentTarget }, newValue) => {
    setActiveTab(newValue);
    setTabType(currentTarget.id);
  };

  return (
    <MKBox component="section" py={{ xs: 0, lg: 7 }}>
      <MKBox
        borderRadius="xl"
        shadow="lg"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <Container sx={{ pb: { xs: 12, lg: 22 }, pt: 12 }}>
          <Grid
            container
            item
            flexDirection="column"
            alignItems="center"
            xs={12}
            md={8}
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKBadge
              badgeContent="pricing"
              variant="gradient"
              container
              color="dark"
              sx={{ mb: 1 }}
            />
            <MKTypography variant="h3" color="white" mb={2}>
              See our pricing
            </MKTypography>
            <MKTypography variant="body2" color="white">
              You have Free Unlimited Updates and Premium Support on each package.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <MKBox mt={-16}>
        <Container>
          <Grid container sx={{ mb: 6 }}>
            <Grid item xs={7} md={6} lg={4} sx={{ mx: "auto", textAlign: "center" }}>
              <AppBar position="static">
                <Tabs value={activeTab} onChange={handleTabType}>
                  <Tab
                    id="monthly"
                    label={
                      <MKBox py={0.5} px={2} color="inherit">
                        Monthly
                      </MKBox>
                    }
                  />
                  <Tab
                    id="annual"
                    label={
                      <MKBox py={0.5} px={2} color="inherit">
                        Annual
                      </MKBox>
                    }
                  />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
          <MKBox position="relative" zIndex={10} px={{ xs: 1, sm: 0 }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  badge={{ color: "light", label: "starter" }}
                  price={{ currency: "$", value: tabType === "annual" ? 119 : 59, type: "mo" }}
                  specifications={[
                    { label: "2 team members", includes: true },
                    { label: "20GB Cloud storage", includes: true },
                    { label: "Integration help", includes: false },
                    { label: "Sketch Files", includes: false },
                    { label: "API Access", includes: false },
                    { label: "Complete documentation", includes: false },
                  ]}
                  action={{
                    type: "internal",
                    route: "/",
                    color: "dark",
                    label: "join",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  color="dark"
                  badge={{ color: "info", label: "premium" }}
                  price={{ currency: "$", value: tabType === "annual" ? 159 : 89, type: "mo" }}
                  specifications={[
                    { label: "10 team members", includes: true },
                    { label: "40GB Cloud storage", includes: true },
                    { label: "Integration help", includes: true },
                    { label: "Sketch Files", includes: true },
                    { label: "API Access", includes: false },
                    { label: "Complete documentation", includes: false },
                  ]}
                  action={{
                    type: "internal",
                    route: "/",
                    color: "info",
                    label: "try premium",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <DefaultPricingCard
                  badge={{ color: "light", label: "enterprise" }}
                  price={{ currency: "$", value: tabType === "annual" ? 99 : 399, type: "mo" }}
                  specifications={[
                    { label: "Unlimited team members", includes: true },
                    { label: "100GB Cloud storage", includes: true },
                    { label: "Integration help", includes: true },
                    { label: "Sketch Files", includes: true },
                    { label: "API Access", includes: true },
                    { label: "Complete documentation", includes: true },
                  ]}
                  action={{
                    type: "internal",
                    route: "/",
                    color: "dark",
                    label: "join",
                  }}
                />
              </Grid>
            </Grid>
          </MKBox>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Pricing;
