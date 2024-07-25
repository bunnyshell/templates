const tabsVerticalCode = `import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabsVertical() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  return (
    <Container>
      <Grid container item justifyContent="center" xs={12} lg={4} mx="auto">
        <AppBar position="static">
          <Tabs value={activeTab} orientation="vertical" onChange={handleTabType}>
            <Tab label="My Profile" />
            <Tab label="Dashboard" />
            <Tab label="Payments" />
          </Tabs>
        </AppBar>
      </Grid>
    </Container>
  );
}

export default TabsVertical;`;

export default tabsVerticalCode;
