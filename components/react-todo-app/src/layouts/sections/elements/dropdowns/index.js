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

// Dropdowns page components
import DropdownAndDropup from "layouts/sections/elements/dropdowns/components/DropdownAndDropup";
import SelectPicker from "layouts/sections/elements/dropdowns/components/SelectPicker";

// Dropdowns page components code
import dropdownAndDropupCode from "layouts/sections/elements/dropdowns/components/DropdownAndDropup/code";
import selectPickerCode from "layouts/sections/elements/dropdowns/components/SelectPicker/code";

function Dropdowns() {
  return (
    <BaseLayout
      title="Dropdowns"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/dropdowns" },
        { label: "Dropdowns" },
      ]}
    >
      <View title="Dropdown and Dropup" code={dropdownAndDropupCode}>
        <DropdownAndDropup />
      </View>
      <View title="Selectpicker" height="24rem" code={selectPickerCode}>
        <SelectPicker />
      </View>
    </BaseLayout>
  );
}

export default Dropdowns;
