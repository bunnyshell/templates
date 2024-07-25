/* eslint-disable no-param-reassign */
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

import { useState } from "react";

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

export default TabsVertical;
