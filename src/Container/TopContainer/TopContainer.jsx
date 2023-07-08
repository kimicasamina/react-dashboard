import React, {useEffect, useRef} from 'react'
import {FaSistrix, FaBell, FaChevronDown} from 'react-icons/fa'
import Avatar from '../../Assets/Images/pinacolada.jpg'

const TopContainer = () => {
    const menuContainer = useRef(null)

    // const handleChevronEnter = (e) => {
    //     // console.log(menuContainer.current)
    //     // console.log(e.currentTarget)
    //     if (!menuContainer.current.classList.contains('active')){
    //         menuContainer.current.classList.add('active')
    //         // console.log("ACTIVE")
    //     }
    // }

    // const handleChevronLeave = (e) => {
    //     if (menuContainer.current.classList.contains('active')){
    //         setTimeout(() => {
    //             menuContainer.current.classList.remove('active')
    //             // console.log('REMOVED ACTIVE')
    //         }, 1000)
    //     }
    // }

    const handleMenuEnter = () => {
        if (!menuContainer.current.classList.contains('active')){
            menuContainer.current.classList.add('active')
            console.log("ACTIVE")
        }
    }

    const handleMenuLeave = () => {
        if (menuContainer.current.classList.contains('active')){
            setTimeout(() => {
                menuContainer.current.classList.remove('active')
                console.log('REMOVED ACTIVE')
            }, 1000)
        }
    }

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
            <i className="chevronMenu" onMouseEnter={(e) => {handleMenuEnter(e)}} onMouseLeave={(e) => {handleMenuLeave(e)}}>
                <FaChevronDown />
            </i>

            <div className="chevronMenuContainer" ref={menuContainer} onMouseOver={(e) => {handleMenuEnter(e)}} onMouseLeave={(e) => {handleMenuLeave(e)}}>
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
