const teamOneCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import TransparentTeamCard from "examples/Cards/TeamCards/TransparentTeamCard";

// Images
import team1 from "assets/images/bruce-mars.jpg";
import team2 from "assets/images/team-3.jpg";
import team3 from "assets/images/team-4.jpg";

function Team1() {
  const socialIcons = (
    <>
      <Tooltip placement="top" title="Follow me!">
        <MKBox
          component="i"
          fontSize="1.125rem"
          className="fab fa-twitter"
          sx={{
            color: ({ palette: { socialMediaColors } }) => socialMediaColors.twitter.main,
            cursor: "pointer",
          }}
        />
      </Tooltip>
      <Tooltip placement="top" title="Follow me!">
        <MKBox
          component="i"
          fontSize="1.125rem"
          className="fab fa-dribbble"
          sx={{
            color: ({ palette: { socialMediaColors } }) => socialMediaColors.dribbble.main,
            cursor: "pointer",
          }}
        />
      </Tooltip>
      <Tooltip placement="top" title="Follow me!">
        <MKBox
          component="i"
          fontSize="1.125rem"
          className="fab fa-linkedin"
          sx={{
            color: ({ palette: { socialMediaColors } }) => socialMediaColors.linkedin.main,
            cursor: "pointer",
          }}
        />
      </Tooltip>
    </>
  );

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item flexDirection="column" xs={12} lg={7} mb={6}>
          <MKBox
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="3rem"
            height="3rem"
            variant="gradient"
            bgColor="info"
            color="white"
            shadow="md"
            borderRadius="lg"
            mb={2}
          >
            <Icon>supervisor_account</Icon>
          </MKBox>
          <MKTypography variant="h3" mb={1}>
            Our Awesome Team
          </MKTypography>
          <MKTypography variant="body2" color="text">
            This is the paragraph where you can write more details about your team. Keep you user
            engaged by providing meaningful information.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} mt={6}>
          <Grid item xs={12} md={6} lg={4}>
            <TransparentTeamCard
              image={team1}
              name="Alec Thompson"
              position="CEO / Co-Founder"
              description="And I love you like Kanye loves Kanye. We need to restart the human foundation."
              socials={socialIcons}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TransparentTeamCard
              image={team2}
              name="Alec Thompson"
              position="CEO / Co-Founder"
              description="And I love you like Kanye loves Kanye. We need to restart the human foundation."
              socials={socialIcons}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TransparentTeamCard
              image={team3}
              name="Alec Thompson"
              position="CEO / Co-Founder"
              description="And I love you like Kanye loves Kanye. We need to restart the human foundation."
              socials={socialIcons}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team1;`;

export default teamOneCode;
