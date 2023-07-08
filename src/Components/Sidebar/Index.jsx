import React, {useState, useEffect, useRef} from 'react';
import './styles/styles.css';
import {IoBeer} from 'react-icons/io5';
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const topMenu = [
    {
        id: 1,
        title: 'Home',
        icon: <FaDelicious />,
        url: '/'
    },
    {
        id: 2,
        title: 'Shop',
        icon: <FaShoppingCart />,
        url: '/shop'
    },
    {
      id: 3,
      title: 'Wallet',
      icon: <FaWallet />,
      url: '/wallet'
    },
    {
      id: 4,
      title: 'Chart',
      icon: <FaChartLine />,
      url: '/chart'
    }
]

const bottomMenu = [
  {
    id: 1,
    title: 'Clock',
    icon: <FaRegClock />,
    url: '/clock'
  },
  {
    id: 2,
    title: 'Signout',
    icon: <FaSignOutAlt />,
    url: '/signout'
  },
]

const Index = () => {
  const [navItem, setNavItem] = useState([])

  const handleClick = (e) => {
    // LOOP THROUGH LI AND REMOVE ACTIVE CLASS
    const topMenu = document.querySelector('.topMenu').children
    const botMenu = document.querySelector('.bottomMenu').children
    setNavItem([...topMenu, ...botMenu])
    for (let i = 0; i < navItem.length; i++){
      if(navItem[i].classList.contains('active')){
        navItem[i].classList.remove('active')
      }
    }

    // ADD ACTIVE CLASS TO THE TARGET LI
    const li = e.currentTarget
    if(!li.classList.contains('active')){
      li.classList.add('active')
    } 
  }

  return (
    <div className="sidebar">
      <div className="logo">
        <IoBeer className="beerIcon"/>
        <div className="brand">
        <span>HOLD</span>
        <span>MY</span>
        <span>BEER</span></div>
      </div>

      <div className="menu">
        <div className="topMenu" >
          {topMenu.map(data => {
            return(
              <li className="item" key={data.id} onClick={(e) => {handleClick(e)}}>
                <span className="menuIcon">{data.icon}</span>
                <span className="menuTitle">{data.title}</span>
              </li> 
            )
          })}
        </div>

        <div className="bottomMenu">
          {
            bottomMenu.map(data => {
              return(
                <li className="item" key={data.id} onClick={(e) => {handleClick(e)}}>
                  <span className="menuIcon">{data.icon}</span>
                  <span className="menuTitle">{data.title}</span>
                </li> 
              )  
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Index
