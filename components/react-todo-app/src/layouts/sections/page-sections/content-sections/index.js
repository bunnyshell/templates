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

// Pricing page components
import ContentOne from "layouts/sections/page-sections/content-sections/components/ContentOne";
import ContentTwo from "layouts/sections/page-sections/content-sections/components/ContentTwo";

// Pricing page components code
import contentOneCode from "layouts/sections/page-sections/content-sections/components/ContentOne/code";
import contentTwoCode from "layouts/sections/page-sections/content-sections/components/ContentTwo/code";

function ContentSections() {
  return (
    <BaseLayout
      title="Content Sections"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/content-sections" },
        { label: "Content Sections" },
      ]}
    >
      <View title="Content 1" code={contentOneCode}>
        <ContentOne />
      </View>
      <View title="Content 2" code={contentTwoCode}>
        <ContentTwo />
      </View>
    </BaseLayout>
  );
}

export default ContentSections;
