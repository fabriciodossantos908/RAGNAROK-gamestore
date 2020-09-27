import React, { useState } from "react";
import Header from "../../components/Header";
import api from "../../services/api";

import introImage from "../../assets/images/landing-introduce-img.svg";
import cardImage from "../../assets/images/test/card-img.jpg";
import windowsIcon from "../../assets/images/test/windows-icon.svg";
import xboxIcon from "../../assets/images/test/xbox-icon.svg";
import playstationIcon from "../../assets/images/test/playstation-icon.svg";

import "./styles.css";
import { Link } from "react-router-dom";

export default function Landing() {
  const [gameCards, setGameCards] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // Call the games in the api
  async function loadCards() {
    try {
      const response = await api.get("games");

      setLoaded(true);
      setGameCards(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  // Checking the game card array
  if (loaded === false) {
    loadCards();
  }
  return (
    <div id="page-landing">
      <div id="page-header">
        <Header turnBack={false} />
        <section id="landing-introduce-container">
          <img src={introImage} alt="couple friends with games acessories" />
          <div id="landing-introduce-title">
            <h1>RAGNAROK</h1>
            <h1>GAMES</h1>
            <p>O melhor lugar onde seu proximo jogo está a um passo de você!</p>
            <p> Encontre o jogo dos seus sonhos na lista abaixo.</p>
          </div>
        </section>
      </div>
      {/* List the cards */}
      <section id="cardlist">
        <div className="card-item">
          {/* card image section */}
          <div className="card-img">
            <img src={cardImage} alt="card image" />
            <div className="card-title-box">
              <h1>Cyberpunk 2077</h1>
              <div className="card-metacritic">
                <h3>100</h3>
              </div>
            </div>
          </div>
          {/* card desc section */}
          <div className="card-desc">
            {/* first line of description -> platforms | age recomendation */}
            <div className="card-first-line">
              <div className="card-platforms">
                <img src={windowsIcon} alt="windows" />
                <img src={xboxIcon} alt="xbox" />
                <img src={playstationIcon} alt="playstation" />
              </div>
              <h3>18+</h3>
            </div>
            <div className="card-desc-line">
              <h4>Gênero</h4>
              <h4>Ação, RPG</h4>
            </div>
            <div className="card-desc-line">
              <h4>Lançamento</h4>
              <h4></h4>
            </div>
            <div className="card-show-details">
              <Link to="/games">
                <button>Ver mais</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
