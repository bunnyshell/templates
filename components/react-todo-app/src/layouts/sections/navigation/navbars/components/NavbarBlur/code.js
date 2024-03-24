const navbarBlurCode = `// Material Kit 2 PRO React examples
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

export default NavbarBlur;`;

export default navbarBlurCode;
