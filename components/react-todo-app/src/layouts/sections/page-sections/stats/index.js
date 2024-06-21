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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Stats page components
import StatsOne from "layouts/sections/page-sections/stats/components/StatsOne";
import StatsTwo from "layouts/sections/page-sections/stats/components/StatsTwo";
import StatsThree from "layouts/sections/page-sections/stats/components/StatsThree";

// Stats page components code
import statsOneCode from "layouts/sections/page-sections/stats/components/StatsOne/code";
import statsTwoCode from "layouts/sections/page-sections/stats/components/StatsTwo/code";
import statsThreeCode from "layouts/sections/page-sections/stats/components/StatsThree/code";

function Stats() {
  return (
    <BaseLayout
      title="Stats"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/stats" },
        { label: "Stats" },
      ]}
    >
      <View title="Stats 1" code={statsOneCode}>
        <StatsOne />
      </View>
      <View title="Stats 2" code={statsTwoCode}>
        <StatsTwo />
      </View>
      <View title="Stats 3" code={statsThreeCode}>
        <StatsThree />
      </View>
    </BaseLayout>
  );
}

export default Stats;
