const BlogPostOneCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React components
import ColoredBackgroundCard from "examples/Cards/BackgroundCards/ColoredBackgroundCard";
import InfoBackgroundCard from "examples/Cards/BackgroundCards/InfoBackgroundCard";

function BlogPostOne() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          justifyContent="center"
          mx="auto"
          mb={6}
        >
          <MKBox py={2} px={6} textAlign="center">
            <MKBox
              width="4rem"
              height="4rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              variant="gradient"
              bgColor="info"
              color="white"
              shadow="md"
              borderRadius="lg"
              mx="auto"
            >
              <Icon fontSize="medium">person</Icon>
            </MKBox>
            <MKTypography variant="h2" mt={2} mb={1}>
              Check out what&apos;s new
            </MKTypography>
            <MKTypography variant="body2" color="text">
              We get insulted by others, lose trust for those others. We get back freezes every
              winter
            </MKTypography>
          </MKBox>
        </Grid>
        <Grid container spacing={3} mb={6}>
          <Grid item xs={12} md={6} lg={4}>
            <ColoredBackgroundCard
              image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/beach.jpg"
              label="landscape"
              title="Nature's Light"
              description="It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it."
              action={{
                type: "internal",
                route: "/sections/page-sections/blog-posts",
                label: "read more",
              }}
            />
          </Grid>
          <Grid container spacing={3} item xs={12} md={6} lg={8}>
            <Grid item xs={12} md={6}>
              <InfoBackgroundCard
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/indian.jpg"
                icon="import_contacts"
                title="Cultural"
                label="257 spots"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InfoBackgroundCard
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/city.jpg"
                icon="festival"
                title="Modern Life"
                label="117 spots"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InfoBackgroundCard
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/greece.jpg"
                icon="volunteer_activism"
                title="Popularity"
                label="363 spots"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InfoBackgroundCard
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laught.jpg"
                icon="theater_comedy"
                title="Good Vibes"
                label="215 spots"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BlogPostOne;`;

export default BlogPostOneCode;
