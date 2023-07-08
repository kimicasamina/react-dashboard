import React from 'react'
import LeftContainer from './LeftContainer/LeftContainer'
import RightContainer from './RightContainer/RightContainer'
import './Styles/styles.scss'

const MainContainer = () => {
  return (
    <div className="mainContainer">
        <LeftContainer />
        <RightContainer />
    </div>
  )
}

export default MainContainer
