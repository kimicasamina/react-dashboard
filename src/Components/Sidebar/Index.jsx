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
  const [activeNav, setActiveNav] = useState("")
  const [navItem, setNavItem] = useState([])
  const navTarget = useRef(null)

  const handleClick = (e) => {
    const lis = document.querySelector('.topMenu').children
    for (let i = 0; i < lis.length; i++){
      if(lis[i].classList.contains('active')){
        lis[i].classList.remove('active')
      }
    }
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
