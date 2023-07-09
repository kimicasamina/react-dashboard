import React from 'react'

const Index = () => {
  return (
    <div className="topRightContainer">
        <div className="stats">
            <div className="stats__name">
                <h2>Statistics</h2>
                <a href="#">View More</a>
            </div>
            <div className="stats__body">
                <li>
                    <h3>Artwork Sold</h3>
                    <span>187</span>
                </li>
                <li>
                    <h3>Artwork Cancelled</h3>
                    <span>13</span>
                </li>
                <li>
                    <h3>Artwork Pending</h3>
                    <span>27</span>
                </li>
                <li>
                    <h3>Artwork Delivered</h3>
                    <span>270</span>
                </li>
                <li>
                    <h3>Total Earning</h3>
                    <span className='totalEarning'>267653</span>
                </li>
            </div>
        </div>
    </div>
  )
}

export default Index