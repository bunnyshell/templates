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

// CTA page components
import CtaOne from "layouts/sections/page-sections/cta/components/CtaOne";
import CtaTwo from "layouts/sections/page-sections/cta/components/CtaTwo";
import CtaThree from "layouts/sections/page-sections/cta/components/CtaThree";

// CTA page components code
import ctaOneCode from "layouts/sections/page-sections/cta/components/CtaOne/code";
import ctaTwoCode from "layouts/sections/page-sections/cta/components/CtaTwo/code";
import ctaThreeCode from "layouts/sections/page-sections/cta/components/CtaThree/code";

function Cta() {
  return (
    <BaseLayout
      title="Call to Action"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/cta" },
        { label: "Call to Action" },
      ]}
    >
      <View title="Prefooter 1" code={ctaOneCode}>
        <MKBox bgColor="white">
          <CtaOne />
        </MKBox>
      </View>
      <View title="Prefooter 2" code={ctaTwoCode}>
        <CtaTwo />
      </View>
      <View title="Prefooter 3" code={ctaThreeCode}>
        <CtaThree />
      </View>
    </BaseLayout>
  );
}

export default Cta;
