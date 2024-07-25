const contentTwoCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKButton from "components/MKButton";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Images
import profilePicture from "assets/images/team-2.jpg";

function ContentTwo() {
  return (
    <MKBox component="section" py={20}>
      <Container>
        <Grid container>
          <Grid item xs={12} lg={8} mx="auto">
            <Grid container justifyContent="space-betweeb" alignItems="center">
              <Grid xs={12} md={6}>
                <MKBox ml={-1}>
                  <MKBadge badgeContent="Photography" variant="contained" color="info" />
                  <MKBadge badgeContent="Stories" variant="contained" color="info" />
                  <MKBadge badgeContent="Castle" variant="contained" color="info" />
                </MKBox>
              </Grid>
              <Grid xs={12} md={6}>
                <Stack direction="row" spacing={1} justifyContent="flex-end">
                  <MKSocialButton color="facebook" size="sm">
                    <MKBox className="fab fa-facebook" color="inherit" mr={1} /> 872
                  </MKSocialButton>
                  <MKSocialButton color="twitter" size="sm">
                    <MKBox className="fab fa-twitter" color="inherit" mr={1} /> 910
                  </MKSocialButton>
                  <MKSocialButton color="pinterest" size="sm">
                    <MKBox className="fab fa-pinterest" color="inherit" mr={1} /> 232
                  </MKSocialButton>
                </Stack>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 1 }} />
            <MKBox display="flex" alignItems="center">
              <MKAvatar
                src={profilePicture}
                alt="Alec Thompson"
                size="xxl"
                variant="rounded"
                shadow="xl"
              />
              <MKBox ml={3}>
                <MKTypography variant="h5" mb={1}>
                  Alec Thompson
                </MKTypography>
                <MKTypography variant="button" color="text">
                  I&apos;ve been trying to figure out the bed design for the master bedroom at our
                  Hidden Hills compound...I like good music from Youtube.
                </MKTypography>
              </MKBox>
              <MKBox display={{ xs: "none", lg: "block" }} ml={1}>
                <MKButton color="dark">Follow</MKButton>
              </MKBox>
            </MKBox>
            <MKBox display={{ xs: "block", lg: "none" }} mt={1}>
              <MKButton color="dark">Follow</MKButton>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ContentTwo;`;

export default contentTwoCode;
