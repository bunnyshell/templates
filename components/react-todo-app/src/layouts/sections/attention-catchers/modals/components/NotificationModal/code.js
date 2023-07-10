const notificationModalCode = `import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import Icon from "@mui/material/Icon";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function NotificationModal() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
          <MKButton variant="gradient" color="error" onClick={toggleModal}>
            Launch Demo Modal
          </MKButton>
        </Grid>
        <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={show} timeout={500}>
            <MKBox
              position="relative"
              width="500px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              variant="gradient"
              bgColor="error"
              shadow="sm"
            >
              <MKBox
                display="flex"
                alginItems="center"
                justifyContent="space-between"
                py={3}
                px={2}
              >
                <MKTypography variant="h6" color="white">
                  Your attention is required
                </MKTypography>
                <CloseIcon
                  color="white"
                  fontSize="medium"
                  sx={{ cursor: "pointer" }}
                  onClick={toggleModal}
                />
              </MKBox>
              <Divider light sx={{ my: 0 }} />
              <MKBox p={6} textAlign="center" color="white">
                <Icon fontSize="large" color="inherit">
                  notifications_active
                </Icon>
                <MKTypography variant="h4" color="white" mt={3} mb={1}>
                  You should read this!
                </MKTypography>
                <MKTypography variant="body2" color="white" opacity={0.8} mb={2}>
                  A small river named Duden flows by their place and supplies it with the necessary
                  regelialia.
                </MKTypography>
              </MKBox>
              <Divider light sx={{ my: 0 }} />
              <MKBox display="flex" justifyContent="space-between" py={2} px={1.5}>
                <MKButton color="white">ok, got it</MKButton>
                <MKButton variant="text" color="white" onClick={toggleModal}>
                  close
                </MKButton>
              </MKBox>
            </MKBox>
          </Slide>
        </Modal>
      </Container>
    </MKBox>
  );
}

export default NotificationModal;`;

export default notificationModalCode;
