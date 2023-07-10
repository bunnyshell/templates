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

// Stats page components
import TabsSimple from "layouts/sections/navigation/nav-tabs/components/TabsSimple";
import TabsWithIcons from "layouts/sections/navigation/nav-tabs/components/TabsWithIcons";
import TabsVertical from "layouts/sections/navigation/nav-tabs/components/TabsVertical";

// Stats page components code
import tabsSimpleCode from "layouts/sections/navigation/nav-tabs/components/TabsSimple/code";
import tabsWithIconsCode from "layouts/sections/navigation/nav-tabs/components/TabsWithIcons/code";
import tabsVerticalCode from "layouts/sections/navigation/nav-tabs/components/TabsVertical/code";

function NavTabs() {
  return (
    <BaseLayout
      title="Nav Tabs"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/nav-tabs" },
        { label: "Nav Tabs" },
      ]}
    >
      <View title="Tabs simple" code={tabsSimpleCode}>
        <MKBox bgColor="white" py={6}>
          <TabsSimple />
        </MKBox>
      </View>
      <View title="Tabs with icon" code={tabsWithIconsCode}>
        <MKBox bgColor="white" py={6}>
          <TabsWithIcons />
        </MKBox>
      </View>
      <View title="Tabs vertical" code={tabsVerticalCode}>
        <MKBox bgColor="white" py={6}>
          <TabsVertical />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default NavTabs;
