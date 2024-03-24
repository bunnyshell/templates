const socialButtonsIconCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKSocialButton from "components/MKSocialButton";

function SocialButtonsIcon() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <MKBox display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
            <MKSocialButton color="facebook" iconOnly>
              <MKBox component="i" color="inherit" className="fab fa-facebook" />
            </MKSocialButton>
            <MKSocialButton color="twitter" iconOnly>
              <MKBox component="i" color="inherit" className="fab fa-twitter" />
            </MKSocialButton>
            <MKSocialButton color="instagram" iconOnly>
              <MKBox component="i" color="inherit" className="fab fa-instagram" />
            </MKSocialButton>
            <MKSocialButton color="github" iconOnly>
              <MKBox component="i" color="inherit" className="fab fa-github" />
            </MKSocialButton>
            <MKSocialButton color="pinterest" iconOnly>
              <MKBox component="i" color="inherit" className="fab fa-pinterest" />
            </MKSocialButton>
            <MKSocialButton color="youtube" iconOnly>
              <MKBox component="i" color="inherit" className="fab fa-youtube" />
            </MKSocialButton>
            <MKSocialButton color="vimeo" iconOnly>
              <MKBox component="i" color="inherit" className="fab fa-vimeo" />
            </MKSocialButton>
            <MKSocialButton color="slack" iconOnly>
              <MKBox component="i" color="inherit" className="fab fa-slack" />
            </MKSocialButton>
            <MKSocialButton color="dribbble" iconOnly>
              <MKBox component="i" color="inherit" className="fab fa-dribbble" />
            </MKSocialButton>
            <MKSocialButton color="reddit" iconOnly>
              <MKBox component="i" color="inherit" className="fab fa-reddit" />
            </MKSocialButton>
            <MKSocialButton color="tumblr" iconOnly>
              <MKBox component="i" color="inherit" className="fab fa-tumblr" />
            </MKSocialButton>
            <MKSocialButton color="linkedin" iconOnly>
              <MKBox component="i" color="inherit" className="fab fa-linkedin" />
            </MKSocialButton>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SocialButtonsIcon;`;

export default socialButtonsIconCode;
