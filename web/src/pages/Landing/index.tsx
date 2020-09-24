import React, { useState } from 'react'
import CardGameItem, { GameItem } from '../../components/CardGameItem'
import Header from '../../components/Header'
import api from '../../services/api'

import './styles.css'

export default function Landing() {
    const [gameCards, setGameCards] = useState([])
    const [loaded, setLoaded] = useState(false)
    // Call the games in the api
    async function loadCards() {
        try {
            const response = await api.get('games');

            setLoaded(true)
            setGameCards(response.data);
        } catch (err) {
            console.log(err)
        }
    }

    // Checking the game card array
    if (loaded === false) {
        loadCards();
    }
    return (
        <div id="page-landing">
            <Header />
            <section id="landing-title">
                <h1>RAGNAROK GAMES</h1>
                <p>Veja as ultimas novidades no mundo dos games!</p>
            </section>
            <section id="cardlist">
                {loaded === true ? gameCards.map((gameCardItem: GameItem) => {
                    return <CardGameItem key={gameCardItem.id} game={gameCardItem} />
                })
                    : <h1>Carregando jogos</h1>
                }
            </section>
        </div>
    )
}