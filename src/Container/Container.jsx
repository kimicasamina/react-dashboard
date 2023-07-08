import React from 'react'
import './styles/styles.css'
import TopContainer from './TopContainer/TopContainer'
import MainContainer from './MainContainer/MainContainer'

const Container = () => {
  return (
    <div className="container">
        <TopContainer />
        <MainContainer />
    </div>
  )
}

export default Container
