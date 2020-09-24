import React, { FC } from 'react'

import './styles.css'

export interface GameItem {
    id: number
    name: String,
    image: string,
    description: string,
    release_date: String,
    genres: String,
    metacritic: Number,
    platforms: String,
    price: String
}

interface GameItemProps {
    game: GameItem
}

const CardGameItem: FC<GameItemProps> = ({ game }) => {
    return (
        <div className="card-item">
            <div className="card-item-image">
                <img src={game.image} alt="test" />
                <div className="card-item-metacritic">
                    <h6>{game.metacritic} </h6>
                </div>
            </div>
            <div className="card-item-desc">
                <div className="card-item-desc-title">
                    <h2>{game.name} </h2>
                </div>
                <div className="card-item-desc-data">
                    <div className="card-desc-line">
                        <h4>lançamento:</h4>
                        <h4>{game.release_date} </h4>
                    </div>

                    <div className="card-desc-line">
                        <h4>genero:</h4>
                        <h4>{game.genres} </h4>
                    </div>

                    <div className="card-desc-line">
                        <h4>plataformas</h4>
                        <h4>{game.platforms} </h4>
                    </div>

                </div>
                {/* <div className="card-item-desc-buy">
                    <button>
                        <h2>R$ {game.price} </h2>
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default CardGameItem;