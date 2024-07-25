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
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DetailedFooter from "examples/Footers/DetailedFooter";

function FooterOne() {
  const date = new Date().getFullYear();

  const footerContent = {
    brand: {
      name: "MATERIAL UI DESIGN",
      description: "The next generation of design systems.",
    },
    socials: [
      {
        icon: <i className="fab fa-facebook" />,
        link: "https://www.facebook.com/CreativeTim/",
      },
      {
        icon: <i className="fab fa-twitter" />,
        link: "https://twitter.com/creativetim",
      },
      {
        icon: <i className="fab fa-instagram" />,
        link: "https://www.instagram.com/creativetimofficial/",
      },
      {
        icon: <i className="fab fa-pinterest" />,
        link: "https://ro.pinterest.com/thecreativetim/",
      },
      {
        icon: <i className="fab fa-github" />,
        link: "https://github.com/creativetimofficial",
      },
    ],
    menus: [
      {
        name: "company",
        items: [
          { name: "about us", href: "https://www.creative-tim.com" },
          { name: "career", href: "https://www.creative-tim.com" },
          { name: "press", href: "https://www.creative-tim.com" },
          { name: "blog", href: "https://www.creative-tim.com" },
        ],
      },
      {
        name: "Pages",
        items: [
          { name: "login", href: "https://www.creative-tim.com" },
          { name: "register", href: "https://www.creative-tim.com" },
          { name: "add list", href: "https://www.creative-tim.com" },
          { name: "contact", href: "https://www.creative-tim.com" },
        ],
      },
      {
        name: "legal",
        items: [
          { name: "terms", href: "https://www.creative-tim.com" },
          { name: "about us", href: "https://www.creative-tim.com" },
          { name: "team", href: "https://services.creative-tim.com" },
          { name: "privacy", href: "https://www.creative-tim.com" },
        ],
      },
      {
        name: "resources",
        items: [
          { name: "blog", href: "https://www.creative-tim.com" },
          { name: "services", href: "https://www.creative-tim.com" },
          { name: "product", href: "https://www.creative-tim.com" },
          { name: "pricing", href: "https://www.creative-tim.com" },
        ],
      },
    ],
    copyright: (
      <MKTypography variant="button" color="secondary">
        Copyright &copy; {date} Material Design by{" "}
        <MKTypography
          component="a"
          href="https://www.creative-tim.com"
          target="_blank"
          rel="noreferrer"
          variant="button"
          color="secondary"
        >
          Creative Tim
        </MKTypography>
        .
      </MKTypography>
    ),
  };

  return <DetailedFooter content={footerContent} />;
}

export default FooterOne;
