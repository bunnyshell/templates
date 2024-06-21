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

// ALerts page components
import SimpleAlerts from "layouts/sections/attention-catchers/alerts/components/SimpleAlerts";
import AlertsWithLinks from "layouts/sections/attention-catchers/alerts/components/AlertsWithLinks";
import AlertWithContent from "layouts/sections/attention-catchers/alerts/components/AlertWithContent";
import DismissingAlert from "layouts/sections/attention-catchers/alerts/components/DismissingAlert";

// ALerts page components code
import simpleAlertsCode from "layouts/sections/attention-catchers/alerts/components/SimpleAlerts/code";
import alertsWithLinksCode from "layouts/sections/attention-catchers/alerts/components/AlertsWithLinks/code";
import alertWithContentCode from "layouts/sections/attention-catchers/alerts/components/AlertWithContent/code";
import dismissingAlertCode from "layouts/sections/attention-catchers/alerts/components/DismissingAlert/code";

function Alerts() {
  return (
    <BaseLayout
      title="Alerts"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/alerts" },
        { label: "Alerts" },
      ]}
    >
      <View title="Simple alerts" code={simpleAlertsCode}>
        <SimpleAlerts />
      </View>
      <View title="Alerts with links" code={alertsWithLinksCode}>
        <AlertsWithLinks />
      </View>
      <View title="Alert with content" code={alertWithContentCode}>
        <AlertWithContent />
      </View>
      <View title="Dismissing alert" code={dismissingAlertCode}>
        <DismissingAlert />
      </View>
    </BaseLayout>
  );
}

export default Alerts;
