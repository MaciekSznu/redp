import React from "react";
import "./root.css";
import MainView from "../MainView/MainView";
import ContactPageView from "../ContactPageView/ContactPageView";
import InvestorPageView from "../InvestorPageView/InvestorPageView";
import SchedulePageView from "../SchedulePageView/SchedulePageView";
import VideoPageView from "../VideoPageView/VideoPageView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainView} />
      <Route path="/contact" component={ContactPageView} />
      <Route path="/investor" component={InvestorPageView} />
      <Route path="/schedule" component={SchedulePageView} />
      <Route path="/video" component={VideoPageView} />
    </Switch>
  </Router>
);

export default Root;
