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

// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Emails() {
  return (
    <Card>
      <MKBox display="flex" justifyContent="space-between" p={3} lineHeight={1}>
        <MKTypography variant="body2" color="text">
          Emails (21)
        </MKTypography>
        <Tooltip title="Check your emails" placement="top">
          <MKBox component="a" href="#">
            <MKTypography variant="body2" fontWeight="regular">
              Check
            </MKTypography>
          </MKBox>
        </Tooltip>
      </MKBox>
    </Card>
  );
}

export default Emails;
