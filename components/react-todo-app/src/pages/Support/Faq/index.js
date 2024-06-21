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

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
import SimpleInfoCard from "examples/Cards/InfoCards/SimpleInfoCard";

// HelpCenter page components
import FaqCollapse from "pages/Support/Faq/components/FaqCollapse";

// Routes
import routes from "routes";

function Faq() {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-pro-react",
          label: "buy now",
          color: "info",
        }}
        sticky
      />
      <MKBox component="section" pt={20} pb={12}>
        <Container sx={{ mb: 8 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <SimpleInfoCard
                icon="description"
                title="Detailed Documentation"
                description="The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever."
                direction="center"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SimpleInfoCard
                icon="support"
                title="Awesome Support"
                description="The time is now for it to be okay to be great. People in this world shun people for being great. I'm not trying, I'm not trying to do the best way."
                direction="center"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SimpleInfoCard
                icon="grid_view"
                title="Styled Components"
                description="If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed."
                direction="center"
              />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Card>
                <MKBox
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                  p={3}
                  mt={-3}
                  mx={2}
                >
                  <MKTypography variant="h3" color="white">
                    FAQ
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Last modified: Sept 07 2021
                  </MKTypography>
                </MKBox>
                <MKBox p={6}>
                  <MKTypography variant="h5" my={3}>
                    Basics
                  </MKTypography>
                  <FaqCollapse
                    title="How do I order?"
                    open={collapse === 1}
                    onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
                  >
                    We&apos;re not always in the position that we want to be at. We&apos;re
                    constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly
                    trying to express ourselves and actualize our dreams. If you have the
                    opportunity to play this game of life you need to appreciate every moment. A lot
                    of people don&apos;t appreciate the moment until it&apos;s passed.
                  </FaqCollapse>
                  <FaqCollapse
                    title="How can i make the payment?"
                    open={collapse === 2}
                    onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
                  >
                    It really matters and then like it really doesn&apos;t matter. What matters is
                    the people who are sparked by it. And the people who are like offended by it, it
                    doesn&apos;t matter. Because it&apos;s about motivating the doers. Because
                    I&apos;m here to follow my dreams and inspire other people to follow their
                    dreams, too. We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes. We&apos;re
                    constantly trying to express ourselves and actualize our dreams. If you have the
                    opportunity to play this game of life you need to appreciate every moment. A lot
                    of people don&apos;t appreciate the moment until it&apos;s passed.
                  </FaqCollapse>
                  <FaqCollapse
                    title="How much time does it take to receive the order?"
                    open={collapse === 3}
                    onClick={() => (collapse === 3 ? setCollapse(false) : setCollapse(3))}
                  >
                    The time is now for it to be okay to be great. People in this world shun people
                    for being great. For being a bright color. For standing out. But the time is now
                    to be okay to be the greatest you. Would you believe in what you believe in, if
                    you were the only one who believed it? If everything I did failed - which it
                    doesn&apos;t, it actually succeeds - just the fact that I&apos;m willing to fail
                    is an inspiration. People are so scared to lose that they don&apos;t even try.
                    Like, one thing people can&apos;t say is that I&apos;m not trying, and I&apos;m
                    not trying my hardest, and I&apos;m not trying to do the best way I know how.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Can I resell the products?"
                    open={collapse === 4}
                    onClick={() => (collapse === 4 ? setCollapse(false) : setCollapse(4))}
                  >
                    I always felt like I could do anything. That&apos;s the main thing people are
                    controlled by! Thoughts- their perception of themselves! They&apos;re slowed
                    down by their perception of themselves. If you&apos;re taught you can&apos;t do
                    anything, you won&apos;t do anything. I was taught I could do everything.
                    <br />
                    <br />
                    If everything I did failed - which it doesn&apos;t, it actually succeeds - just
                    the fact that I&apos;m willing to fail is an inspiration. People are so scared
                    to lose that they don&apos;t even try. Like, one thing people can&apos;t say is
                    that I&apos;m not trying, and I&apos;m not trying my hardest, and I&apos;m not
                    trying to do the best way I know how.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Where do I find the shipping details?"
                    open={collapse === 5}
                    onClick={() => (collapse === 5 ? setCollapse(false) : setCollapse(5))}
                  >
                    There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to
                    get good at. That&apos;s my skill. I&apos;m not really specifically talented at
                    anything except for the ability to learn. That&apos;s what I do. That&apos;s
                    what I&apos;m here for. Don&apos;t be afraid to be wrong because you can&apos;t
                    learn anything from a compliment. I always felt like I could do anything.
                    That&apos;s the main thing people are controlled by! Thoughts- their perception
                    of themselves! They&apos;re slowed down by their perception of themselves. If
                    you&apos;re taught you can&apos;t do anything, you won&apos;t do anything. I was
                    taught I could do everything.
                  </FaqCollapse>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Account & Settings
                  </MKTypography>
                  <FaqCollapse
                    title="How do I change my password?"
                    open={collapse === 6}
                    onClick={() => (collapse === 6 ? setCollapse(false) : setCollapse(6))}
                  >
                    Society has put up so many boundaries, so many limitations on what&apos;s right
                    and wrong that it&apos;s almost impossible to get a pure thought out. It&apos;s
                    like a little kid, a little boy, looking at colors, and no one told him what
                    colors are good, before somebody tells you you shouldn&apos;t like pink because
                    that&apos;s for girls, or you&apos;d instantly become a gay two-year-old.
                  </FaqCollapse>
                  <FaqCollapse
                    title="How can I delete my account?"
                    open={collapse === 7}
                    onClick={() => (collapse === 7 ? setCollapse(false) : setCollapse(7))}
                  >
                    Why would anyone pick blue over pink? Pink is obviously a better color.
                    Everyone&apos;s born confident, and everything&apos;s taken away from you
                    <br />
                    <br />
                    We&apos;re not always in the position that we want to be at. We&apos;re
                    constantly growing. We&apos;re constantly making mistakes.
                  </FaqCollapse>
                  <FaqCollapse
                    title="How can I change account make account settings?"
                    open={collapse === 8}
                    onClick={() => (collapse === 8 ? setCollapse(false) : setCollapse(8))}
                  >
                    People in this world shun people for being great. For being a bright color.
                    We&apos;re constantly trying to express ourselves and actualize our dreams. If
                    you have the opportunity to play this game of life you need to appreciate every
                    moment. A lot of people don&apos;t appreciate the moment until it&apos;s passed.
                  </FaqCollapse>
                  <FaqCollapse
                    title="How to reset my password?"
                    open={collapse === 9}
                    onClick={() => (collapse === 9 ? setCollapse(false) : setCollapse(9))}
                  >
                    What matters is the people who are sparked by it. And the people who are like
                    offended by it, it doesn&apos;t matter. Because it&apos;s about motivating the
                    doers. Because I&apos;m here to follow my dreams and inspire other people to
                    follow their dreams, too.
                  </FaqCollapse>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Licenses
                  </MKTypography>
                  <FaqCollapse
                    title="What are the differences between the licenses on the website?"
                    open={collapse === 10}
                    onClick={() => (collapse === 10 ? setCollapse(false) : setCollapse(10))}
                  >
                    We&apos;re constantly trying to express ourselves and actualize our dreams. If
                    you have the opportunity to play this game of life you need to appreciate every
                    moment. A lot of people don&apos;t appreciate the moment until it&apos;s passed.
                    The time is now for it to be okay to be great.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Can I use a premium product in an open source project?"
                    open={collapse === 11}
                    onClick={() => (collapse === 11 ? setCollapse(false) : setCollapse(11))}
                  >
                    People in this world shun people for being great. For being a bright color. For
                    standing out. But the time is now to be okay to be the greatest you. Would you
                    believe in what you believe in, if you were the only one who believed it? As we
                    live, our hearts turn colder.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Can I use my Freelancer/Startup License on an alias domain?"
                    open={collapse === 12}
                    onClick={() => (collapse === 12 ? setCollapse(false) : setCollapse(12))}
                  >
                    Cause pain is what we go through as we become older. We get insulted by others,
                    lose trust for those others. We get back stabbed by friends. It becomes harder
                    for us to give others a hand. We get our heart broken by people we love, even
                    that we give them all we have. Then we lose family over time. What else could
                    rust the heart more over time? Blackgold.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Can I use my Freelancer/Startup License on an alias domain?"
                    open={collapse === 13}
                    onClick={() => (collapse === 13 ? setCollapse(false) : setCollapse(13))}
                  >
                    Cause pain is what we go through as we become older. We get insulted by others,
                    lose trust for those others. We get back stabbed by friends. It becomes harder
                    for us to give others a hand. We get our heart broken by people we love, even
                    that we give them all we have. Then we lose family over time. What else could
                    rust the heart more over time? Blackgold.
                  </FaqCollapse>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={{ xs: 0, lg: 3 }} pb={3}>
        <SimpleFooter />
      </MKBox>
    </>
  );
}

export default Faq;
