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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function DefaultBackgroundCard({ image, label, title, description, action }) {
  return (
    <Card
      sx={({
        functions: { rgba, linearGradient },
        palette: { black },
        borders: { borderRadius },
      }) => ({
        backgroundImage: `${linearGradient(
          rgba(black.main, 0.5),
          rgba(black.main, 0.5)
        )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: borderRadius.xl,
      })}
    >
      <MKBox textAlign="center" pt={12} pb={3} px={3}>
        {label && (
          <MKTypography variant="body2" color="white" textTransform="uppercase" mb={2}>
            {label}
          </MKTypography>
        )}
        <MKTypography variant="h3" color="white">
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="white" opacity={0.8} mb={2}>
          {description}
        </MKTypography>
        {action.type === "internal" ? (
          <MKButton component={Link} to={action.route} color="white" size="small" sx={{ my: 2 }}>
            {action.label}
          </MKButton>
        ) : (
          <MKButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            color="white"
            size="small"
            sx={{ my: 2 }}
          >
            {action.label}
          </MKButton>
        )}
      </MKBox>
    </Card>
  );
}

// Setting default values for the props of DefaultBackgroundCard
DefaultBackgroundCard.defaultProps = {
  label: "",
};

// Typechecking props for the DefaultBackgroundCard
DefaultBackgroundCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultBackgroundCard;
