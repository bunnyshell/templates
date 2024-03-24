const featuresThreeCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import SimpleInfoCard from "examples/Cards/InfoCards/SimpleInfoCard";

function FeaturesThree() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          mx="auto"
          textAlign="center"
          pb={6}
        >
          <MKTypography variant="h2" mb={1}>
            Turn your idea into a startup
          </MKTypography>
          <MKTypography variant="body1" color="text">
            We&apos;re constantly trying to express ourselves and actualize our dreams. If you have
            the opportunity to play{" "}
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <SimpleInfoCard
              color="primary"
              icon="person"
              title="Check our team"
              description="People in this world shun people for being great. For being a bright color. For standing out."
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SimpleInfoCard
              icon="support_agent"
              title="Support 24/7"
              description="We get insulted by others, lose trust for those others. We get back here to follow my dreams"
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SimpleInfoCard
              color="warning"
              icon="update"
              title="Unlimited revisions"
              description="The time is now to be okay to be the greatest you. Would you believe in what you believe in?"
              direction="center"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesThree;`;

export default featuresThreeCode;
