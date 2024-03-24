const toastBasicCode = `import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKSnackbar from "components/MKSnackbar";

function ToastBasic() {
  const [show, setShow] = useState(false);
  const toggleSnackbar = () => setShow(!show);

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
          <MKButton variant="gradient" color="dark" onClick={toggleSnackbar}>
            Show Snackbar
          </MKButton>
        </Grid>
        <MKSnackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          color="dark"
          icon="notifications"
          title="Material Design"
          content="Hello, world! This is a notification message"
          dateTime="11 mins ago"
          open={show}
          close={toggleSnackbar}
        />
      </Container>
    </MKBox>
  );
}

export default ToastBasic;`;

export default toastBasicCode;
