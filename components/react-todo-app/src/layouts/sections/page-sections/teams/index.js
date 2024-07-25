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

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Pricing page components
import TeamOne from "layouts/sections/page-sections/teams/components/TeamOne";
import TeamTwo from "layouts/sections/page-sections/teams/components/TeamTwo";

// Pricing page components code
import teamOneCode from "layouts/sections/page-sections/teams/components/TeamOne/code";
import teamTwoCode from "layouts/sections/page-sections/teams/components/TeamTwo/code";

function Teams() {
  return (
    <BaseLayout
      title="Teams"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/teams" },
        { label: "Teams" },
      ]}
    >
      <View title="Team 1" height="40rem" code={teamOneCode}>
        <TeamOne />
      </View>
      <View title="Team 2" code={teamTwoCode}>
        <MKBox bgColor="white">
          <TeamTwo />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default Teams;
