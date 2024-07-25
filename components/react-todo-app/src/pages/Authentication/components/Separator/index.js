/**
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-2-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Separator() {
  const separatorStyles = {
    content: '""',
    display: "inline-block",
    width: "30%",
    height: "1px",
    position: "relative",
    verticalAlign: "middle",
  };

  return (
    <MKBox my={3} position="relative" textAlign="center">
      <MKTypography
        variant="button"
        fontWeight="bold"
        color="secondary"
        px={2}
        sx={{
          "&::before": {
            ...separatorStyles,
            right: "0.5em",
            marginLeft: "-50%",
            background: ({ functions: { rgba }, palette: { secondary } }) =>
              `linear-gradient(90deg, transparent, ${rgba(secondary.main, 0.4)}, ${rgba(
                secondary.main,
                0.4
              )})`,
          },
          "&::after": {
            ...separatorStyles,
            left: "0.5em",
            marginRight: "-50%",
            background: ({ functions: { rgba }, palette: { secondary } }) =>
              `linear-gradient(90deg, ${rgba(secondary.main, 0.4)}, ${rgba(
                secondary.main,
                0.4
              )}, transparent)`,
          },
        }}
      >
        or continue with
      </MKTypography>
    </MKBox>
  );
}

export default Separator;
