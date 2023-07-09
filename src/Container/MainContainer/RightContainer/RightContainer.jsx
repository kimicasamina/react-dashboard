import React from 'react'
import './Styles/styles.css'
import TopRightContainer from './TopRightContainer/Index'
import BottomRightContainer from './BottomRightContainer/Index'

const RightContainer = () => {
  return (
    <div className="rightContainer">
      <TopRightContainer />
      <BottomRightContainer />
    </div>
  )
}

export default RightContainer
