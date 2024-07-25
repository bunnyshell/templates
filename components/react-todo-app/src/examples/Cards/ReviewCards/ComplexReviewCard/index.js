/*
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

function ComplexReviewCard({ image, color, title, review, author }) {
  return (
    <Grid container alignItems="center" spacing={3}>
      <Grid item xs={12} md={5} sx={{ ml: { xs: 0, lg: "auto" } }}>
        <MKBox p={{ xs: 0, lg: 6 }}>
          <MKBox
            component="img"
            src={image}
            alt={title}
            width="100%"
            borderRadius="md"
            shadow="md"
          />
        </MKBox>
      </Grid>
      <Grid item xs={12} md={7} lg={5} sx={{ mr: { xs: 0, lg: "auto" } }}>
        <MKTypography variant="button" color="text" fontWeight="bold" mb={0.5}>
          - Customer Story
        </MKTypography>
        <MKTypography variant="h3" color={color}>
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="text" my={3}>
          <em>&quot;{review}&quot;</em>
        </MKTypography>
        <MKBox display="flex" alignItems="center">
          <MKAvatar
            src={author.logo}
            alt="Logo"
            size="md"
            shadow="md"
            bgColor={color}
            sx={{ p: 0.5 }}
          />
          <MKBox pl={1.5}>
            <MKTypography display="block" variant="button" color={color} fontWeight="bold">
              {author.name}
            </MKTypography>
            <MKTypography display="block" variant="button" color="text" fontWeight="regular">
              {author.role}
            </MKTypography>
          </MKBox>
        </MKBox>
        <MKBox width="25%" mt={-16} ml="auto" opacity={0.2}>
          <svg
            width="110px"
            height="110px"
            viewBox="0 0 270 270"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>quote-down</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z"
                fill="#48484A"
                fillRule="nonzero"
                transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) "
              />
            </g>
          </svg>
        </MKBox>
      </Grid>
    </Grid>
  );
}

// Setting default props for the ComplexReviewCard
ComplexReviewCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the ComplexReviewCard
ComplexReviewCard.propTypes = {
  image: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "error",
    "warning",
    "dark",
    "light",
  ]),
  title: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  author: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default ComplexReviewCard;
