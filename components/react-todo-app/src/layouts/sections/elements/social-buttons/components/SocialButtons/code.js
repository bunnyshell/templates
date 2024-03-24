const socialButtonsCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKSocialButton from "components/MKSocialButton";

function SocialButtons() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <MKBox display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
            <MKSocialButton color="facebook">
              <MKBox component="i" color="inherit" mr={0.5} className="fab fa-facebook" />
              facebook
            </MKSocialButton>
            <MKSocialButton color="twitter">
              <MKBox component="i" color="inherit" mr={0.5} className="fab fa-twitter" />
              twitter
            </MKSocialButton>
            <MKSocialButton color="instagram">
              <MKBox component="i" color="inherit" mr={0.5} className="fab fa-instagram" />
              instagram
            </MKSocialButton>
            <MKSocialButton color="github">
              <MKBox component="i" color="inherit" mr={0.5} className="fab fa-github" />
              github
            </MKSocialButton>
            <MKSocialButton color="pinterest">
              <MKBox component="i" color="inherit" mr={0.5} className="fab fa-pinterest" />
              pinterest
            </MKSocialButton>
            <MKSocialButton color="youtube">
              <MKBox component="i" color="inherit" mr={0.5} className="fab fa-youtube" />
              youtube
            </MKSocialButton>
            <MKSocialButton color="vimeo">
              <MKBox component="i" color="inherit" mr={0.5} className="fab fa-vimeo" />
              vimeo
            </MKSocialButton>
            <MKSocialButton color="slack">
              <MKBox component="i" color="inherit" mr={0.5} className="fab fa-slack" />
              slack
            </MKSocialButton>
            <MKSocialButton color="dribbble">
              <MKBox component="i" color="inherit" mr={0.5} className="fab fa-dribbble" />
              dribbble
            </MKSocialButton>
            <MKSocialButton color="reddit">
              <MKBox component="i" color="inherit" mr={0.5} className="fab fa-reddit" />
              reddit
            </MKSocialButton>
            <MKSocialButton color="tumblr">
              <MKBox component="i" color="inherit" mr={0.5} className="fab fa-tumblr" />
              tumblr
            </MKSocialButton>
            <MKSocialButton color="linkedin">
              <MKBox component="i" color="inherit" mr={0.5} className="fab fa-linkedin" />
              linkedin
            </MKSocialButton>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SocialButtons;`;

export default socialButtonsCode;
