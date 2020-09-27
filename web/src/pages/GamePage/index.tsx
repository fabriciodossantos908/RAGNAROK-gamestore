import React from "react";
import Header from "../../components/Header";

import windowsIcon from "../../assets/images/test/windows-icon.svg";
import xboxIcon from "../../assets/images/test/xbox-icon.svg";
import playstationIcon from "../../assets/images/test/playstation-icon.svg";
import storeBackground from "../../assets/images/test/store_background.jpg";

import "./styles.css";

export default function GamePage() {
  return (
    <div id="game-page">
      <Header turnBack={true} />
      <div className="game-page-container">
        <div className="game-page-description">
          <div className="game-title-section">
            <h1>Cyberpunk 2077</h1>
            <div className="game-platforms">
              <img src={windowsIcon} alt="Windows" />
              <img src={xboxIcon} alt="Xbox" />
              <img src={playstationIcon} alt="Play station" />
            </div>
          </div>

          <div className="game-info">
            <div className="desc-data-line">
              <div className="about">
                <h1>Sobre</h1>
                <p>
                  Cyberpunk 2077 é um jogo eletrônico de RPG de ação
                  desenvolvido e publicado pela CD Projekt. Será lançado em 19
                  de novembro de 2020 para Microsoft Windows, PlayStation 4 e
                  Xbox One, no final de 2020 para Google Stadia, e em 2021 para
                  PlayStation 5 e Xbox Series X.
                </p>
              </div>
              <div className="price">
                <h1>Pré venda</h1>
                <button>R$ 250,00</button>
              </div>
            </div>
            
            <div className="topics">
              <div className="topic-item">
                <h1>Plataforma</h1>
                <h1>Play station, sbox</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="game-page-stores">
          <div id="list-title">
            <h3>Lojas disponíveis</h3>
          </div>
          <div className="card-store">
            <img src={storeBackground} alt="store osasco" />
            <h1>RAGNAROK Osasco</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
