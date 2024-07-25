const ctaOneCode = `// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import image from "assets/images/examples/blog2.jpg";

function StatsOne() {
  return (
    <MKBox component="section" py={12}>
      <MKBox bgColor="grey-100" py={12} px={{ xs: 3, lg: 0 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={6} ml="auto">
            <MKTypography variant="h4" mb={1}>
              Be the first to see the news
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Your company may not be in the software business, but eventually, a software company
              will be in your business.
            </MKTypography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <MKInput label="Email Here" fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <MKButton variant="gradient" color="warning" sx={{ height: "100%" }}>
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} xl={4} position="relative">
            <MKBox
              component="img"
              src={image}
              alt="image"
              maxWidth="18.75rem"
              width="100%"
              borderRadius="lg"
              shadow="xl"
              mt={-24}
              display={{ xs: "none", lg: "block" }}
            />
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

export default StatsOne;`;

export default ctaOneCode;
