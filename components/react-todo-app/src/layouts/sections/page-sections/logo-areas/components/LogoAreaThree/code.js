const logoAreaThreeCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import coinbase from "assets/images/logos/medium-logos/logo-coinbase.svg";
import nasa from "assets/images/logos/medium-logos/logo-nasa.svg";
import netflix from "assets/images/logos/medium-logos/logo-netflix.svg";
import pinterest from "assets/images/logos/medium-logos/logo-pinterest.svg";
import spotify from "assets/images/logos/medium-logos/logo-spotify.svg";
import vodafone from "assets/images/logos/medium-logos/logo-vodafone.svg";

function LogoAreaThree() {
  return (
    <MKBox py={6}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={8}
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h3" mb={1}>
            More than 50+ brands trust Material
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={coinbase} alt="coinbase" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasa} alt="nasa" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={netflix} alt="netflix" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={pinterest} alt="pinterest" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={spotify} alt="spotify" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafone} alt="vodafone" width="100%" opacity={0.9} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LogoAreaThree;`;

export default logoAreaThreeCode;
