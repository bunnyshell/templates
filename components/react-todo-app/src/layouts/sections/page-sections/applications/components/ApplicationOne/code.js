const applicationOneCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import ColoredBackgroundCard from "examples/Cards/BackgroundCards/ColoredBackgroundCard";

function ApplicationOne() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          flexDirection="column"
          textAlign="center"
          mx="auto"
          mb={3}
        >
          <MKTypography
            variant="body2"
            color="info"
            fontWeight="bold"
            textTransform="uppercase"
            textGradient
          >
            Our Work
          </MKTypography>
          <MKTypography variant="h3">Some of our awesome projects - 3</MKTypography>
        </Grid>
        <Grid container spacing={3} mt={4}>
          <Grid item xs={12} md={6} lg={4}>
            <ColoredBackgroundCard
              color="dark"
              image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg"
              label="Productivity"
              title="Search and Discover!"
              description="Don't be scared of the truth because we need to restart the human foundation in
                    truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design."
              action={{
                type: "internal",
                route: "/sections/page-sections/applications",
                label: "get started",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ColoredBackgroundCard
              color="dark"
              image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/toboshar.jpg"
              label="Design"
              title="Find music and play it!"
              description="As we live, our hearts turn colder. Cause pain is what we go through as we
                    become older. We get insulted by others, lose trust for those others."
              action={{
                type: "internal",
                route: "/sections/page-sections/applications",
                label: "get started",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ColoredBackgroundCard
              color="dark"
              image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/umbrellas.jpg"
              label="Support"
              title="Check bugs and fix!"
              description="If you have the opportunity to play this game of life you need to appreciate
                    every moment. A lot of people don’t appreciate the moment until it’s passed."
              action={{
                type: "internal",
                route: "/sections/page-sections/applications",
                label: "get started",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ApplicationOne;`;

export default applicationOneCode;
