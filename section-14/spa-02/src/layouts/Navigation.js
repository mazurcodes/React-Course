import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";

const list = [
  {name: "Start", path:"/", activeClass:"start-active",exact:true},
  {name: "Produkty", path:"/products", activeClass:"products-active", exact:true},
  {name: "Kontakt", path:"/contact", activeClass:"contact-active", exact:true},
  {name: "Panel Admina", path:"/admin", activeClass:"admin-active", exact:true},
]

const Navigation = () => {

  const menu = list.map(({name, path, activeClass, exact}) => <li key={name}><NavLink to={path} activeClassName={activeClass} exact={exact}>{name}</NavLink></li>)

  return (
    <nav>
      <ul>
        {menu}
      </ul>
    </nav>
  )
}

export default Navigation
