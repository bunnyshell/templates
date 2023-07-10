/* eslint-disable no-param-reassign */
/**
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarBlur() {
  return (
    <DefaultNavbar
      routes={routes}
      action={{
        type: "external",
        route: "https://www.creative-tim.com/product/material-kit-pro-react",
        label: "buy now",
        color: "info",
      }}
      relative
      center
    />
  );
}

export default NavbarBlur;
