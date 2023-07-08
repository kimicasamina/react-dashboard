import React from 'react'
import {FaHeart} from 'react-icons/fa';
import './styles.scss'

const Card = ({data}) => {
    const {name, image, likes } = data
    console.log(data)
  return (
    <div className="card">
        <img src={image} alt="" />
        <div className="cardBody">
            <h3 className="cardName">{name}</h3>
            <div className="likes">
                <FaHeart className="icon"/>
                <p>{likes}</p>
            </div>
        </div>
        <div className="buttons">
            <button className="bidBtn btn">Place a bid</button>
            <button className="historyBtn btn">History</button>
        </div>
    </div>
  )
}

export default Card
