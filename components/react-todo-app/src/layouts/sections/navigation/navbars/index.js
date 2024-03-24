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
import NavbarDark from "layouts/sections/navigation/navbars/components/NavbarDark";
import NavbarLight from "layouts/sections/navigation/navbars/components/NavbarLight";
import NavbarTransparent from "layouts/sections/navigation/navbars/components/NavbarTransparent";
import NavbarBlur from "layouts/sections/navigation/navbars/components/NavbarBlur";

// Stats page components code
import navbarDarkCode from "layouts/sections/navigation/navbars/components/NavbarDark/code";
import navbarLightCode from "layouts/sections/navigation/navbars/components/NavbarLight/code";
import navbarTransparentCode from "layouts/sections/navigation/navbars/components/NavbarTransparent/code";
import navbarBlurCode from "layouts/sections/navigation/navbars/components/NavbarBlur/code";

function Navbars() {
  return (
    <BaseLayout
      title="Navbars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/navbars" },
        { label: "Navbars" },
      ]}
    >
      <View title="Navbar dark" code={navbarDarkCode}>
        <MKBox py={6}>
          <NavbarDark />
        </MKBox>
      </View>
      <View title="Navbar light" code={navbarLightCode}>
        <MKBox py={6}>
          <NavbarLight />
        </MKBox>
      </View>
      <View title="Navbar transparent" code={navbarTransparentCode}>
        <MKBox py={6}>
          <NavbarTransparent />
        </MKBox>
      </View>
      <View title="Navbar blur" code={navbarBlurCode}>
        <MKBox py={6} variant="gradient" bgColor="dark">
          <NavbarBlur />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default Navbars;
