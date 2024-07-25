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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function OurEfforts() {
  const bgImage =
    "https://images.unsplash.com/photo-1585975438803-350463f9c9b6?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1867&amp;q=80";

  return (
    <MKBox component="section">
      <MKBox
        mx={-2}
        minHeight="18.75rem"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
        }}
      />
      <Container>
        <Grid container item flexDirection="column" xs={12} lg={8} mt={12} mx="auto">
          <MKTypography
            component="h6"
            variant="button"
            textTransform="uppercase"
            fontWeight="bold"
            opacity={0.7}
            mb={1}
          >
            Our effort
          </MKTypography>
          <MKTypography variant="h3" mb={3}>
            The powerfull design system
          </MKTypography>
          <MKTypography variant="body2">
            The way to survive in modern society is to be an ascetic. It is to retreat from society.
            There&apos;s too much society everywhere you go…The only solution is turn it off.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default OurEfforts;
