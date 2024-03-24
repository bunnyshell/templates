const logoAreaTwoCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import team1 from "assets/images/team-3.jpg";
import team2 from "assets/images/marie.jpg";
import team3 from "assets/images/team-2.jpg";
import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import behanceLogo from "assets/images/logos/gray-logos/logo-behance.svg";
import spotifyLogo from "assets/images/logos/gray-logos/logo-spotify.svg";
import coinbaseLogo from "assets/images/logos/gray-logos/logo-coinbase.svg";
import pinterestLogo from "assets/images/logos/gray-logos/logo-pinterest.svg";

function LogoAreaTwo() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={6} justifyContent="center" mx="auto" textAlign="center">
          <MKTypography variant="h2" mb={2}>
            Think about us
          </MKTypography>
          <MKTypography variant="body2" color="text" mb={2}>
            That&apos;s the main thing people are controlled by! Thoughts - their perception of
            themselves!{" "}
          </MKTypography>
        </Grid>
        <Grid container spacing={3} mt={8}>
          <Grid item xs={12} md={8} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultReviewCard
              image={team1}
              name="Mathew Glock"
              date="1 day ago"
              review="If you have the opportunity to play this game of life you need to appreciate every moment."
              rating={4}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultReviewCard
              color="info"
              image={team2}
              name="Mathew Glock"
              date="28 February"
              review="If you have the opportunity to play this game of life you need to appreciate every moment."
              rating={3}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultReviewCard
              image={team3}
              name="Mathew Glock"
              date="3 days ago"
              review="If you have the opportunity to play this game of life you need to appreciate every moment."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} lg={2}>
            <MKBox component="img" src={appleLogo} alt="apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} lg={2}>
            <MKBox component="img" src={behanceLogo} alt="behance" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} lg={2}>
            <MKBox component="img" src={spotifyLogo} alt="spotify" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} lg={2}>
            <MKBox component="img" src={coinbaseLogo} alt="coinbase" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} lg={2}>
            <MKBox component="img" src={pinterestLogo} alt="pinterest" width="100%" opacity={0.6} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LogoAreaTwo;`;

export default logoAreaTwoCode;
