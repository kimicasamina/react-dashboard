import React from 'react'
import {FaHeart} from 'react-icons/fa'
import Card from '../../../Components/Card/Card'
import cardData from '../../../Assets/cardData'

const LeftContainer = () => {
  return (
    <div className="leftContainer">
      <div className="banner">
        <div className="textContainer">
          <h1 className="title">Round Hall</h1>
          <h2 className="subTitle">1.5 ETH</h2>
          <p className="body">Uploaded by Pina Colada</p>
          <div className="bid">
            <button href="#" className="btn bidBtn">BID NOW</button>
            <div className="end">Ending In <div className="time">2d:15h:20m</div></div>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="filter">
          <div className="leftFilter">
            <h3 className='feed'>Feed</h3>
            <a shref="#" className='popular'>Popular</a>
            {/* <a className="popular active">Popular</a> */}
          </div>
          <div className="rightFilter">
            <li className='filterBtn 1 active'>ALL</li>
            <li className='filterBtn 2'>Illustrations</li>
            <li className='filterBtn 3'>Art</li>
            <li className='filterBtn 4'>Games</li>
          </div>
        </div>

        <div className="main">
          {cardData.map(data => {
            return(

              <Card data={data}/>
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default LeftContainer