const tabsWithIconCode = `import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";

function TabsWithIcons() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  return (
    <Container>
      <Grid container item justifyContent="center" xs={12} lg={4} mx="auto">
        <AppBar position="static">
          <Tabs value={activeTab} onChange={handleTabType}>
            <Tab label="My Profile" icon={<Icon>person</Icon>} />
            <Tab label="Dashboard" icon={<Icon>dashboard</Icon>} />
          </Tabs>
        </AppBar>
      </Grid>
    </Container>
  );
}

export default TabsWithIcons;`;

export default tabsWithIconCode;
