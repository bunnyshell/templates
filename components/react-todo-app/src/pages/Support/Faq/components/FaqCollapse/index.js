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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";
import Collapse from "@mui/material/Collapse";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function FaqCollapse({ title, open, children, ...rest }) {
  return (
    <MKBox mb={2}>
      <MKBox
        {...rest}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
        sx={{
          cursor: "pointer",
          borderBottom: ({ borders: { borderWidth, borderColor } }) =>
            `${borderWidth[1]} solid ${borderColor}`,
        }}
      >
        <MKTypography variant="h6" color={open ? "dark" : "text"} sx={{ userSelect: "none" }}>
          {title}
        </MKTypography>
        <MKBox color={open ? "dark" : "text"}>
          <Icon sx={{ fontWeight: "bold" }} fontSize="small">
            {open ? "remove" : "add"}
          </Icon>
        </MKBox>
      </MKBox>
      <Collapse timeout={400} in={open}>
        <MKBox py={2} lineHeight={1}>
          <MKTypography variant="button" color="text" opacity={0.8} fontWeight="regular">
            {children}
          </MKTypography>
        </MKBox>
      </Collapse>
    </MKBox>
  );
}

// Typechecking props for the FaqCollapse
FaqCollapse.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default FaqCollapse;
