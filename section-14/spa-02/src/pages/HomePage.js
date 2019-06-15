import React, { Component } from "react";
import Article from "../components/Article";
import "../styles/HomePage.css";

const articles = [
  {
    title: "Czym jest Teroria Strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores laborum nostrum unde expedita, natus ipsum, ducimus tempore explicabo modi molestiae possimus. Odit similique distinctio repellendus placeat beatae incidunt! Sapiente!"
  },
  {
    title: "Czym jest Paradoks Fermiego",
    author: "Krzysztof Pospółka",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores laborum nostrum unde expedita, natus ipsum, ducimus tempore explicabo modi molestiae possimus. Odit similique distinctio repellendus placeat beatae incidunt! Sapiente!"
  },
  {
    title: "Ciemna Materia i Ciemna Energia",
    author: "Paulina Kowalska",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores laborum nostrum unde expedita, natus ipsum, ducimus tempore explicabo modi molestiae possimus. Odit similique distinctio repellendus placeat beatae incidunt! Sapiente!"
  }
];

class HomePage extends Component {
  render() {
    const articleList = articles.map(article => (
      <Article
        key={article.title}
        {...article}
      />
    ));

    return <div>{articleList}</div>;
  }
}

export default HomePage;
