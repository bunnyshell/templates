/**
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Authentication layout components
import IllustrationLayout from "pages/Authentication/components/IllustrationLayout";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={bgImage}
    >
      <MKBox component="form" role="form">
        <MKBox mb={2}>
          <MKInput type="email" label="Email" fullWidth />
        </MKBox>
        <MKBox mb={2}>
          <MKInput type="password" label="Password" fullWidth />
        </MKBox>
        <MKBox display="flex" alignItems="center" ml={-1}>
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <MKTypography
            variant="button"
            fontWeight="regular"
            color="text"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
          >
            &nbsp;&nbsp;Remember me
          </MKTypography>
        </MKBox>
        <MKBox mt={4} mb={1}>
          <MKButton variant="gradient" color="info" size="large" fullWidth>
            sign in
          </MKButton>
        </MKBox>
        <MKBox mt={3} textAlign="center">
          <MKTypography variant="button" color="text">
            Don&apos;t have an account?{" "}
            <MKTypography
              component={Link}
              to="/authentication/sign-up/cover"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </MKTypography>
          </MKTypography>
        </MKBox>
      </MKBox>
    </IllustrationLayout>
  );
}

export default Illustration;
