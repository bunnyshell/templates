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
import Autocomplete from "@mui/material/Autocomplete";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function SelectPicker() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Autocomplete
            defaultValue="Washington"
            options={["Brazil", "Bucharest", "London", "Washington"]}
            sx={{ width: 300 }}
            renderInput={(params) => <MKInput {...params} variant="standard" />}
          />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SelectPicker;
