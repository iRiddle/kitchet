import React from 'react'

import logo from '../../img/logo.svg'

import './style.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <button className='header__catalog-btn' onClick={() => alert('Каталог')}>Каталог</button>
                <a href='#'>
                    <img src={logo} />
                </a>
                <button className='header__calculate-btn' onClick={() => alert('Рассчет кухню')}>Рассчитать кухню</button>
            </div>
        </header>
    )
}

export default Header
