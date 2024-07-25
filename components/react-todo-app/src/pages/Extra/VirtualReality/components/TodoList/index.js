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
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TodoList() {
  return (
    <Card sx={{ height: "100%", overflow: "hidden" }}>
      <MKBox p={3}>
        <MKBox display="flex" lineHeight={1}>
          <MKBox mr={2}>
            <MKTypography variant="h6" fontWeight="medium">
              08:00
            </MKTypography>
          </MKBox>
          <MKBox>
            <MKTypography variant="h6" fontWeight="medium">
              Synk up with Mark
            </MKTypography>
            <MKTypography variant="button" fontWeight="regular" color="secondary">
              Hangouts
            </MKTypography>
          </MKBox>
        </MKBox>
        <Divider />
        <MKBox display="flex" lineHeight={0}>
          <MKBox mr={2}>
            <MKTypography variant="h6" fontWeight="medium">
              09:30
            </MKTypography>
          </MKBox>
          <MKBox>
            <MKTypography variant="h6" fontWeight="medium">
              Gym
            </MKTypography>
            <MKTypography variant="button" fontWeight="regular" color="secondary">
              World Class
            </MKTypography>
          </MKBox>
        </MKBox>
        <Divider />
        <MKBox display="flex" lineHeight={1}>
          <MKBox mr={2}>
            <MKTypography variant="h6" fontWeight="medium">
              11:00
            </MKTypography>
          </MKBox>
          <MKBox>
            <MKTypography variant="h6" fontWeight="medium">
              Design Review
            </MKTypography>
            <MKTypography variant="button" fontWeight="regular" color="secondary">
              Zoom
            </MKTypography>
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox bgColor="grey-100" mt="auto">
        <Tooltip title="Show More" placement="top" sx={{ cursor: "pointer" }}>
          <MKBox textAlign="center" py={0.5} color="info" lineHeight={0}>
            <Icon sx={{ fontWeight: "bold" }} color="inherit" fontSize="default">
              keyboard_arrow_down
            </Icon>
          </MKBox>
        </Tooltip>
      </MKBox>
    </Card>
  );
}

export default TodoList;
