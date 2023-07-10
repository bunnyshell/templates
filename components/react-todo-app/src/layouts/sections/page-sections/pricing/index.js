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
import PricingOne from "layouts/sections/page-sections/pricing/components/PricingOne";
import PricingTwo from "layouts/sections/page-sections/pricing/components/PricingTwo";
import PricingThree from "layouts/sections/page-sections/pricing/components/PricingThree";

// Pricing page components code
import pricingOneCode from "layouts/sections/page-sections/pricing/components/PricingOne/code";
import pricingTwoCode from "layouts/sections/page-sections/pricing/components/PricingTwo/code";
import pricingThreeCode from "layouts/sections/page-sections/pricing/components/PricingThree/code";

function Pricing() {
  return (
    <BaseLayout
      title="Pricing"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/pricing" },
        { label: "Pricing" },
      ]}
    >
      <View title="Pricing 1" height="40rem" code={pricingOneCode}>
        <PricingOne />
      </View>
      <View title="Pricing 2" code={pricingTwoCode}>
        <MKBox bgColor="white">
          <PricingTwo />
        </MKBox>
      </View>
      <View title="Features 3" code={pricingThreeCode}>
        <MKBox bgColor="grey-200">
          <PricingThree />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default Pricing;
