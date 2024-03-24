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

// Features page components
import FeaturesOne from "layouts/sections/page-sections/featuers/components/FeaturesOne";
import FeaturesTwo from "layouts/sections/page-sections/featuers/components/FeaturesTwo";
import FeaturesThree from "layouts/sections/page-sections/featuers/components/FeaturesThree";

// Features page components code
import featuresOneCode from "layouts/sections/page-sections/featuers/components/FeaturesOne/code";
import featuresTwoCode from "layouts/sections/page-sections/featuers/components/FeaturesTwo/code";
import featuresThreeCode from "layouts/sections/page-sections/featuers/components/FeaturesThree/code";

function Features() {
  return (
    <BaseLayout
      title="Features"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/features" },
        { label: "Features" },
      ]}
    >
      <View title="Features 1" code={featuresOneCode}>
        <FeaturesOne />
      </View>
      <View title="Features 2" code={featuresTwoCode}>
        <FeaturesTwo />
      </View>
      <View title="Features 3" code={featuresThreeCode}>
        <FeaturesThree />
      </View>
    </BaseLayout>
  );
}

export default Features;
