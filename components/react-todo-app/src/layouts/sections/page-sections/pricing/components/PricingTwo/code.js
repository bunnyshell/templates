const featuresTwoCode = `import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import SimplePricingCard from "examples/Cards/PricingCards/SimplePricingCard";

function PricingTwo() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  return (
    <MKBox component="section" py={{ xs: 0, md: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" md={8} mx="auto" textAlign="center">
          <MKTypography variant="h3">Pick the best plan for you</MKTypography>
          <MKTypography variant="body2" color="text">
            You have Free Unlimited Updates and Premium Support on each package.
          </MKTypography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={10}
          lg={8}
          justifyContent="center"
          textAlign="center"
          mx="auto"
          mt={6}
        >
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
                id="quarterly"
                label={
                  <MKBox py={0.5} px={2} color="inherit">
                    Quarterly
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
              <Tab
                id="lifetime-access"
                label={
                  <MKBox py={0.5} px={2} color="inherit">
                    Lifetime access
                  </MKBox>
                }
              />
            </Tabs>
          </AppBar>
        </Grid>
        <Grid container spacing={3} mt={6}>
          <Grid item xs={12} sm={6} lg={3}>
            <SimplePricingCard
              color="dark"
              title="Starter"
              description="Free access for 2 members"
              price={{ value: "$199", type: "year" }}
              action={{ type: "internal", route: "/", label: "buy now" }}
              specifications={["Complete documentation", "Working materials in Sketch"]}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <SimplePricingCard
              color="dark"
              title="Pro"
              description="Free access for 30 members"
              price={{ value: "$299", type: "year" }}
              action={{ type: "internal", route: "/", label: "buy now" }}
              specifications={[
                "Complete documentation",
                "Working materials in Sketch",
                "2GB cloud storage",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
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
          <Grid item xs={12} sm={6} lg={3}>
            <SimplePricingCard
              color="dark"
              title="Enterprise"
              description="Free access for all members"
              price={{ value: "$899", type: "year" }}
              action={{ type: "internal", route: "/", label: "buy now" }}
              specifications={[
                "Complete documentation",
                "Working materials in Sketch",
                "100GB cloud storage",
                "500 team members",
                "Premium support",
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default PricingTwo;`;

export default featuresTwoCode;
