import React from 'react'
import {FaSistrix, FaBell, FaChevronDown} from 'react-icons/fa'
import Avatar from '../../Assets/Images/pinacolada.jpg'

const TopContainer = () => {
  return (
    <div className="topContainer">
        <div className="inputBox">
            <input type="text" placeholder="Search items, collections" />
            <i>
                <FaSistrix className="searchIcon"/>
            </i>
        </div>

        <div className="profileContainer">
            <i className="profileIcon">
                <FaBell />
            </i>
            <img className="profileImage" src={Avatar} alt="" />
            <p className="profileName">Pinacolada</p>
            <i className="chevronMenu">
                <FaChevronDown />
            </i>

            <div className="chevronMenuContainer">
                <ul>
                    <li>Web Design</li>
                    <li>UI/UX</li>
                    <li>Form Design</li>
                    <li>UI design</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TopContainer
