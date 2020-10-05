import React from 'react'
import cn from 'classnames'

import './style.scss'

const PrimaryHeader = ({ titles }) => {
    return (
        <div className='primary-header'>
            <ul className='primary-header__left-side'>
                {titles.map(({ id, title }) =>
                    <li key={id} className='primary-header__elem'>
                        <a href='#' noopener noreferrer className='primary-header__link'>{title}</a>
                    </li>
                )}
            </ul>
            <div className='primary-header__right-side'>
                <a href='#' noopener noreferrer className={cn('primary-header__link', 'primary-header__link--gap')}>info@kuhnicity.ru</a>
                <label className='primary-header__call-container'>
                    <span className=''>Заказать звонок</span>
                    <button className='primary-header__call-btn' onClick={() => alert('number')}>+7 (499) 135-43-78</button>
                </label>
            </div>
        </div>
    )
}

export default PrimaryHeader
