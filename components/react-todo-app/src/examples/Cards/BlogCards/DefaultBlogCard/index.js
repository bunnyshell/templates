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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKAvatar from "components/MKAvatar";

function DefaultBlogCard({ image, category, title, description, author, raised, action }) {
  const imageTemplate = (
    <>
      <MKBox
        component="img"
        src={image}
        alt={title}
        borderRadius="lg"
        shadow={raised ? "md" : "none"}
        width="100%"
        position="relative"
        zIndex={1}
      />
      <MKBox
        borderRadius="lg"
        shadow={raised ? "md" : "none"}
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        top={0}
        sx={
          raised
            ? {
                backgroundImage: `url(${image})`,
                transform: "scale(0.94)",
                filter: "blur(12px)",
                backgroundSize: "cover",
              }
            : {}
        }
      />
    </>
  );

  return (
    <Card>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={raised ? -3 : 2}>
        {action.type === "internal" ? (
          <Link to={action.route}>{imageTemplate}</Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            {imageTemplate}
          </MuiLink>
        )}
      </MKBox>
      <MKBox p={3}>
        {category && (
          <MKTypography
            variant="caption"
            color={category.color}
            textTransform="uppercase"
            fontWeight="medium"
            textGradient
            sx={{ display: "block" }}
          >
            {category.label}
          </MKTypography>
        )}
        {action.type === "internal" ? (
          <Link to={action.route}>
            <MKTypography
              variant="h5"
              textTransform="capitalize"
              my={1}
              sx={{ display: "inline-block" }}
            >
              {title}
            </MKTypography>
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <MKTypography
              variant="h5"
              textTransform="capitalize"
              mt={2}
              mb={1}
              sx={{ display: "inline-block" }}
            >
              {title}
            </MKTypography>
          </MuiLink>
        )}
        <MKTypography variant="body2" component="p" color="text">
          {description}
        </MKTypography>
        {author && (
          <MKBox display="flex" alignItems="center" mt={3}>
            <MKAvatar
              src={author.image}
              alt={author.name}
              shadow="md"
              variant={raised ? "circular" : "rounded"}
            />
            <MKBox pl={2} lineHeight={0}>
              <MKTypography component="h6" variant="button" fontWeight="medium" gutterBottom>
                {author.name}
              </MKTypography>
              <MKTypography variant="caption" color="text">
                {author.date}
              </MKTypography>
            </MKBox>
          </MKBox>
        )}
      </MKBox>
    </Card>
  );
}

// Setting default props for the DefaultBlogCard
DefaultBlogCard.defaultProps = {
  category: false,
  author: false,
  raised: true,
};

// Typechecking props for the DefaultBlogCard
DefaultBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.oneOfType([
    PropTypes.shape({
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
      ]).isRequired,
      label: PropTypes.string.isRequired,
    }),
    PropTypes.bool,
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.oneOfType([
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    }),
    PropTypes.bool,
  ]),
  raised: PropTypes.bool,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultBlogCard;
