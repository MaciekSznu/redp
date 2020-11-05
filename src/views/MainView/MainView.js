import React from 'react';
import TopMenu from "../../components/Header/TopMenu";
import ContactSideBar from "../../components/ContactSideBar/ContactSideBar";
import HeroView from "../HeroView/HeroView";
import InvestmentView from "../InvestmentView/InvestmentView";
import LocationView from "../LocationView/LocationView";
import FlatsView from "../FlatsView/FlatsView";
import CompanyView from "../CompanyView/CompanyView";
import ContactView from "../ContactView/ContactView";
import SliderView from '../SliderView/SliderView';
import FooterView from "../FooterView/FooterView";
import FiltersView from "../FiltersView/FiltersView";

const MainView = () => (
  <>
    <TopMenu />
    <ContactSideBar />
    <HeroView />
    <InvestmentView />
    <SliderView />
    <CompanyView />
    <FlatsView />
    <FiltersView />
    <LocationView />
    <ContactView />
    <FooterView />
  </>
);

export default MainView;