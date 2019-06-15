import React from "react";
import { Route } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={props => {
          return <p>Jestes na stronie glownej</p>;
        }}
      />
      <Route
        path="/:page"
        exact
        render={props => {
          return <p>Jestes w: {props.match.params.page}</p>;
        }}
      />
      <Route
        path="/:page/:cos"
        exact
        render={props => {
          return (
            <>
              <p>Jestes w: {props.match.params.page}</p>
              <p>Jestes w: {props.match.params.cos}</p>
            </>
          );
        }}
      />
    </div>
  );
};

export default Footer;
