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
import TestimonialsOne from "layouts/sections/page-sections/testimonials/components/TestimonialsOne";
import TestimonialsTwo from "layouts/sections/page-sections/testimonials/components/TestimonialsTwo";
import TestimonialsThree from "layouts/sections/page-sections/testimonials/components/TestimonialsThree";

// Pricing page components code
import testimonialOneCode from "layouts/sections/page-sections/testimonials/components/TestimonialsOne/code";
import testimonialTwoCode from "layouts/sections/page-sections/testimonials/components/TestimonialsTwo/code";
import testimonialThreeCode from "layouts/sections/page-sections/testimonials/components/TestimonialsThree/code";

function Testimonials() {
  return (
    <BaseLayout
      title="Testimonials"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/testimonials" },
        { label: "Testimonials" },
      ]}
    >
      <View title="Testimonials 1" height="40rem" code={testimonialOneCode}>
        <TestimonialsOne />
      </View>
      <View title="Testimonials 2" code={testimonialTwoCode}>
        <MKBox bgColor="white">
          <TestimonialsTwo />
        </MKBox>
      </View>
      <View title="Testimonials 3" code={testimonialThreeCode}>
        <MKBox bgColor="white">
          <TestimonialsThree />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default Testimonials;
