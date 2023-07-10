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

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function ToastMessage() {
  const [show, setShow] = useState(false);
  const toggleSnackbar = () => setShow(!show);

  const toastStyles = ({
    palette: { info },
    borders: { borderRadius },
    typography: { size },
    boxShadows: { lg },
  }) => ({
    "& .MuiPaper-root": {
      backgroundColor: info.main,
      borderRadius: borderRadius.lg,
      fontSize: size.sm,
      fontWeight: 400,
      boxShadow: lg,
      px: 2,
      py: 0.5,
    },
  });

  const toastTemplate = (
    <MKBox display="flex" justifyContent="space-between" alignItems="center" color="white">
      Hello, world! This is a notification message.
    </MKBox>
  );

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
          <MKButton variant="gradient" color="info" onClick={toggleSnackbar}>
            Show Snackbar
          </MKButton>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={show}
          autoHideDuration={3000}
          onClose={toggleSnackbar}
          message={toastTemplate}
          action={
            <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleSnackbar} />
          }
          sx={toastStyles}
        />
      </Container>
    </MKBox>
  );
}

export default ToastMessage;
