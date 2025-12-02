import "./App.css";
import tree from "./assets/tree.JPG";
// import Bruno from "./assets/bruno.png";
// import Annie from "./assets/annie.png";
// import Aleksi from "./assets/aleksi.png";
import { PortfolioCard } from "./Components/portfolio/PortfolioCard";
import { useState } from "react";

function App() {
  const [cards] = useState([
    {
      id: 1,
      imgUrl: "/bruno.png",
      linkUrl: "https://bruno-simon.com/",
    },
    {
      id: 2,
      imgUrl: "/annie.png",
      linkUrl: "https://blog.anniebombanie.com/",
    },
    {
      id: 3,
      imgUrl: "/aleksi.png",
      linkUrl: "https://aleksisportfolio.netlify.app/",
    },
  ]);
  return (
    <div className="container">
      <header className="profile">
        <img src={tree} className="profile__image" />
        <h1 className="profile__name">Aleksi Svaridze</h1>
      </header>

      <section className="about">
        <h2 className="about__title">About me</h2>
        <p>I am a student of the SkillWill Academy</p>
        <p>I am learning front end development course</p>
      </section>

      <section className="portfolio">
        <h2 className="portfolio__title">Portfolio</h2>
        <p className="portfolio__description">
          I want my portfolio to look like this after completing the skillwill
          course:
        </p>
        <div className="portfolio__cards-wrapper">
          {cards.map((card) => (
            <PortfolioCard card={card} key={card.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
