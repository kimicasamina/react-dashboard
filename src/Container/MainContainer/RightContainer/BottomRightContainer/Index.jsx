import React from 'react'
import images from '../../../../Assets/Images'

const Index = () => {
  return (
    <div className="bottomRightContainer">
      <div className="topSellers">
        <div className="topSellers__name">
          <h3>Top Seller</h3>
          <a href="#">View More</a>
        </div>
        <div className="topSellers__list">
          <li className="profile">
            <img src={images.avatar0} alt="" />
            <div className="profile__name">
              <h3>Jacquelyn Schaefer</h3>
              <p>@jschaefere</p>
            </div>
            <button className="btn">FOLLOW</button>
          </li>
          <li className="profile">
            <img src={images.avatar1} alt="" />
            <div className="profile__name">
              <h3>Haleigh Howell</h3>
              <p>@hhowell</p>
            </div>
            <button className="btn">FOLLOW</button>
          </li>
          <li className="profile">
            <img src={images.avatar2} alt="" />
            <div className="profile__name">
              <h3>Haleigh Howell</h3>
              <p>@hhowell</p>
            </div>
            <button className="btn">FOLLOW</button>
          </li>
          <li className="profile">
          <img src={images.avatar3} alt="" />
            <div className="profile__name">
              <h3>Breana Bartoletti</h3>
              <p>@breanaBaratoletti</p>
            </div>
            <button className="btn">FOLLOW</button>
          </li>
          <li className="profile">
            <img src={images.avatar4} alt="" />
            <div className="profile__name">
              <h3>Toby Sporer</h3>
              <p>@tobysporer</p>
            </div>
            <button className="btn">FOLLOW</button>
          </li>
          
        </div>
      </div>
    </div>
  )
}

export default Index