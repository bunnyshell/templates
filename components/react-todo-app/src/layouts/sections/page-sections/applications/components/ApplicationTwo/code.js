const applicationTwoCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultBackgroundCard from "examples/Cards/BackgroundCards/DefaultBackgroundCard";

// HelpCenter page components
import ListItem from "pages/Support/HelpCenter/components/ListItem";

// Images
import bgImage1 from "assets/images/examples/color1.jpg";
import bgImage2 from "assets/images/examples/color3.jpg";

function ApplicationTwo() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={10}
          lg={5}
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKBox
            width="3rem"
            height="3rem"
            borderRadius="lg"
            shadow="md"
            variant="gradient"
            bgColor="info"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon fontSize="small" sx={{ opacity: 0.8 }}>
              settings
            </Icon>
          </MKBox>
          <MKTypography variant="h3" mt={3}>
            How To Handle Them
          </MKTypography>
          <MKTypography variant="body2" color="text">
            We&apos;re constantly trying to express ourselves and actualize our dreams. Don&apos;t
            stop.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
          <Grid item xs={12} md={4} sx={{ ml: "auto" }}>
            <DefaultBackgroundCard
              image={bgImage1}
              label="website visitors"
              title="The Best Productivity Apps on Market"
              description="As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others."
              action={{
                type: "internal",
                route: "/pages/support/help-center",
                label: "get started",
              }}
            />
          </Grid>
          <Grid item xs={12} md={5} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <ListItem title="1. Listen to Social Conversations">
              Gain access to the demographics, psychographics, and location of unique people who are
              interested and talk about your brand.
            </ListItem>
            <ListItem title="2. Performance Analyze">
              Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich
              insights from easy-to-use reports.
            </ListItem>
            <ListItem title="3. Social Conversions">
              Track actions taken on your website that originated from social, and understand the
              impact on your bottom line.
            </ListItem>
          </Grid>
        </Grid>
        <Divider sx={{ my: { xs: 2, sm: 8 }, mx: 12 }} />
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <ListItem title="1. Always In Sync">
              No matter where you are, Trello stays in sync across all of your devices.
            </ListItem>
            <ListItem title="2. Work With Any Team">
              Whether it&apos;s for work or even the next family vacation, Trello helps your team.
            </ListItem>
            <ListItem title="3. A Productivity Platform">
              Integrate the apps your team already uses directly into your workflow.
            </ListItem>
          </Grid>
          <Grid item xs={12} md={4} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <DefaultBackgroundCard
              image={bgImage2}
              label="social activities"
              title="Working on Wallstreet is Not So Easy"
              description="There’s nothing I really wanted to do in life that I wasn’t able to get good at. I’m not really specifically talented at anything except for the ability to learn."
              action={{
                type: "internal",
                route: "/pages/support/help-center",
                label: "get started",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ApplicationTwo;`;

export default applicationTwoCode;
