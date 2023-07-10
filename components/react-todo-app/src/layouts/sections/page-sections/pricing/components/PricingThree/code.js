const featuresThreeCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function PricingThree() {
  return (
    <MKBox component="section" py={{ xs: 12, lg: 18 }}>
      <Container>
        <Grid
          container
          item
          xs={12}
          md={6}
          justifyContent="center"
          sx={{ mx: "auto", mb: 8, textAlign: "center" }}
        >
          <MKTypography variant="h2" mb={1}>
            Best no-tricks pricing
          </MKTypography>
          <MKTypography variant="body1" color="text">
            If you&apos;re not satisfied, contact us within the first 30 days and we&apos;ll send
            you a full refund.
          </MKTypography>
        </Grid>
        <Grid container item xs={12}>
          <Card sx={{ width: "100%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h3" mb={1}>
                    Lifetime Membership
                  </MKTypography>
                  <MKTypography variant="body2" color="text" fontWeight="regular">
                    You have Free Unlimited Updates and Premium Support on each package. You also
                    have 30 days to request a refund.
                  </MKTypography>
                  <Grid container item xs={12} lg={3} sx={{ mt: 6, mb: 1 }}>
                    <MKTypography variant="h6">What&apos;s included</MKTypography>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <MKBox display="flex" py={1} pr={1} lineHeight={0}>
                        <MKTypography variant="body1" color="dark">
                          <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                        </MKTypography>
                        <MKTypography variant="body2" color="text" fontWeight="regular" pl={1}>
                          Private code access
                        </MKTypography>
                      </MKBox>
                      <MKBox display="flex" py={1} pr={1} lineHeight={0}>
                        <MKTypography variant="body1" color="dark">
                          <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                        </MKTypography>
                        <MKTypography variant="body2" color="text" fontWeight="regular" pl={1}>
                          Free entry to all repositories
                        </MKTypography>
                      </MKBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MKBox display="flex" py={1} pr={1} lineHeight={0}>
                        <MKTypography variant="body1" color="dark">
                          <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                        </MKTypography>
                        <MKTypography variant="body2" color="text" fontWeight="regular" pl={1}>
                          Pro member accounts
                        </MKTypography>
                      </MKBox>
                      <MKBox display="flex" py={1} pr={1} lineHeight={0}>
                        <MKTypography variant="body1" color="dark">
                          <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                        </MKTypography>
                        <MKTypography variant="body2" color="text" fontWeight="regular" pl={1}>
                          Support team full assist
                        </MKTypography>
                      </MKBox>
                    </Grid>
                  </Grid>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={4}>
                <MKBox p={3} textAlign="center">
                  <MKTypography variant="h6" mt={{ xs: 0, sm: 3 }}>
                    Pay once, own it forever
                  </MKTypography>
                  <MKTypography variant="h1">
                    <MKBox component="small">$</MKBox>399
                  </MKTypography>
                  <MKButton variant="gradient" color="error" size="large" sx={{ my: 2 }}>
                    Get Access
                  </MKButton>
                  <MKTypography display="block" variant="button" color="text" fontWeight="regular">
                    Get a free sample (20MB)
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default PricingThree;`;

export default featuresThreeCode;
