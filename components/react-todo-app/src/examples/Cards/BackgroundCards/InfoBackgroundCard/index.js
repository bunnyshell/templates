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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function InfoBackgroundCard({ image, icon, title, label }) {
  return (
    <Card
      sx={({
        functions: { rgba, linearGradient },
        palette: { gradients },
        borders: { borderRadius },
      }) => ({
        backgroundImage: `${linearGradient(
          rgba(gradients.dark.main, 0.8),
          rgba(gradients.dark.state, 0.8)
        )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: borderRadius.xl,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      })}
    >
      <MKBox width="100%" p={3}>
        <MKTypography variant="h3" color="white">
          {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
        </MKTypography>
      </MKBox>
      <MKBox width="100%" pt={1} pb={2} px={3} lineHeight={1}>
        <MKTypography variant="h4" color="white">
          {title}
        </MKTypography>
        {label && (
          <MKTypography
            variant="caption"
            textTransform="uppercase"
            fontWeight="bold"
            color="white"
            opacity={0.7}
          >
            {label}
          </MKTypography>
        )}
      </MKBox>
    </Card>
  );
}

// Setting default values for the props of InfoBackgroundCard
InfoBackgroundCard.defaultProps = {
  label: "",
};

// Typechecking props for the InfoBackgroundCard
InfoBackgroundCard.propTypes = {
  image: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default InfoBackgroundCard;
