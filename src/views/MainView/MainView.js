import React from 'react';
import TopMenu from "../../components/Header/TopMenu";
import HeroView from "../HeroView/HeroView";
import InvestmentView from "../InvestmentView/InvestmentView";
import LocationView from "../LocationView/LocationView";
import FlatsView from "../FlatsView/FlatsView";
import CompanyView from "../CompanyView/CompanyView";
import ContactView from "../ContactView/ContactView";

const MainView = () => (
  <>
    <TopMenu />
    <HeroView />
    <InvestmentView />
    {/* <FlatsView /> */}
    {/* <LocationView /> */}
    {/* <CompanyView /> */}
    {/* <ContactView /> */}
  </>
);

export default MainView;