const BlogPostFourCode = `// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import SimpleBackgroundCard from "examples/Cards/BackgroundCards/SimpleBackgroundCard";

// Images
import post1 from "assets/images/examples/blog1.jpg";
import post2 from "assets/images/examples/blog2.jpg";
import post3 from "assets/images/examples/blog3.jpg";

function BlogPostFour() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={6} flexDirection="column">
          <MKTypography variant="h3" mt={3} mb={1}>
            Build something great
          </MKTypography>
          <MKTypography variant="body2" color="text" mb={2}>
            We&apos;re constantly trying to express ourselves and actualize our dreams. If you have
            the opportunity to play this game of life you need to appreciate every moment.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} mt={3}>
          <Grid item xs={12} lg={4}>
            <Link to="/sections/page-sections/blog-posts">
              <SimpleBackgroundCard
                image={post1}
                title="Search and Discovery"
                description="Website visitors today demand a frictionless user expericence — especially when
                    using search. Because of the hight standards we tend to offer."
              />
            </Link>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Link to="/sections/page-sections/blog-posts">
              <SimpleBackgroundCard
                image={post2}
                title="Last visits in US"
                description="Wealth creation is an evolutionarily recent positive-sum game. Status is an old
                    zero-sum game. Those attacking wealth creation are often just seeking status."
              />
            </Link>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Link to="/sections/page-sections/blog-posts">
              <SimpleBackgroundCard
                image={post3}
                title="Grow in a beautiful area"
                description="Free people make free choices. Free choices mean you get unequal outcomes. You
                    can have freedom, or you can have equal outcomes. You can't have both."
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BlogPostFour;`;

export default BlogPostFourCode;
