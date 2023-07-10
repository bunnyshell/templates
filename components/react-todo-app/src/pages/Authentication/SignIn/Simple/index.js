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
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Authentication layout components
import SimpleLayout from "pages/Authentication/components/SimpleLayout";
import Separator from "pages/Authentication/components/Separator";
import Socials from "pages/Authentication/components/Socials";

function SignInSimple() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <SimpleLayout>
      <Card>
        <MKBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          pt={2.5}
          pb={2.875}
          px={2.5}
          textAlign="center"
          lineHeight={1}
        >
          <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MKTypography>
          <MKTypography variant="button" color="white">
            Welcome back
          </MKTypography>
        </MKBox>
        <MKBox p={3}>
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
            <MKBox mt={2} mb={1}>
              <MKButton variant="gradient" color="info" fullWidth>
                sign in
              </MKButton>
            </MKBox>
            <Separator />
            <Socials />
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
        </MKBox>
      </Card>
    </SimpleLayout>
  );
}

export default SignInSimple;
