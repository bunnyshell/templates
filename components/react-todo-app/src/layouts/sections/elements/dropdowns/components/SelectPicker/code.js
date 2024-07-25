const selectPickerCode = `// @mui material components
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

export default SelectPicker;`;

export default selectPickerCode;
