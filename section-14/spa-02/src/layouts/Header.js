import React from "react";
import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";
import "../styles/Header.css";
import { Route, Switch } from 'react-router-dom';
import HeaderPhoto from "../components/HeaderPhoto"

const Header = () => {
  return (
    <Switch>
      <Route path="/" exact component={() => <HeaderPhoto src={img1}/>}/>
      <Route path="/products" exact component={() => <HeaderPhoto src={img2}/>}/>
      <Route path="/contact" exact component={() => <HeaderPhoto src={img3}/>}/>
      <Route path="/admin" exact component={() => <HeaderPhoto src={img1}/>}/>
      <Route component={() => <HeaderPhoto src={img1}/>}/>
    </Switch>
  );
};

export default Header;
