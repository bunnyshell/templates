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

// Applications page components
import ApplicationOne from "layouts/sections/page-sections/applications/components/ApplicationOne";
import ApplicationTwo from "layouts/sections/page-sections/applications/components/ApplicationTwo";

// Applications page components code
import applicationOneCode from "layouts/sections/page-sections/applications/components/ApplicationOne/code";
import applicationTwoCode from "layouts/sections/page-sections/applications/components/ApplicationTwo/code";

function Applications() {
  return (
    <BaseLayout
      title="Applications"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/applications" },
        { label: "Applications" },
      ]}
    >
      <View title="Application 1" code={applicationOneCode}>
        <ApplicationOne />
      </View>
      <View title="Application 2" code={applicationTwoCode}>
        <ApplicationTwo />
      </View>
    </BaseLayout>
  );
}

export default Applications;
