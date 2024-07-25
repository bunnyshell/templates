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
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TodoCard() {
  return (
    <MKBox bgColor="dark" variant="gradient" borderRadius="xl" shadow="lg">
      <MKBox p={3}>
        <MKBox display="flex" justifyContent="space-between">
          <MKTypography variant="h5" color="white">
            To Do
          </MKTypography>
          <MKBox textAlign="center" lineHeight={1}>
            <MKTypography variant="h1" color="white" fontWeight="bold">
              7
            </MKTypography>
            <MKTypography variant="button" color="white" fontWeight="regular">
              items
            </MKTypography>
          </MKBox>
        </MKBox>
        <MKTypography variant="body2" color="white" fontWeight="regular">
          Shopping
        </MKTypography>
        <MKTypography variant="body2" color="white" fontWeight="regular">
          Meeting
        </MKTypography>
      </MKBox>
      <Tooltip title="Show More" placement="top" sx={{ cursor: "pointer" }}>
        <MKBox textAlign="center" color="white" py={0.5} lineHeight={0}>
          <Icon sx={{ fontWeight: "bold" }} color="inherit" fontSize="default">
            keyboard_arrow_down
          </Icon>
        </MKBox>
      </Tooltip>
    </MKBox>
  );
}

export default TodoCard;
