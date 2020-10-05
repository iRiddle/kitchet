import React from 'react'
import cn from 'classnames'

import calcSvg from '../../img/icons/calc.svg'

import './style.scss'

const getStateModificator = (state) => {
    switch (state) {
        case 'sale':
            return 'kitchen__state--sale'
        case 'hit':
            return 'kitchen__state--hit'
        case 'new':
            return 'kitchen__state--new'
        default:
            return ''
    }
}

const Kitchen = ({ title, short, cost, state, img, details, className }) => {
    return (
        <article className={cn('kitchen', className)} >
            <div className='kitchen__container'>
                <img className='kitchen__img' src={img} alt={`Кухня ${title}`} />
                <div className='kitchen__more-description-overlay'>
                    <button className='kitchen__more-description-calc'>
                        <img src={calcSvg} alt='Калькулятор модели'></img>
                    </button>
                    <div className='kitchen__more-description-container'>
                        {details.map(({ id, title, description }) =>
                            <div className='kitchen__more-description' key={id}>
                                <h4 className='kitchen__more-description-title'>{title}</h4>
                                <p className='kitchen__more-description-paragraph'>{description}</p>
                            </div>
                        )}
                    </div>
                    <button className='kitchen__more-description-btn'>Посмотреть подробности</button>
                </div>
                <div className={cn('kitchen__state', getStateModificator(state))}>{state}</div>
                <div className='kitchen__title-container'>
                    <h3 className='kitchen__title'>{title}</h3>
                    <span>{`ОТ ${new Intl.NumberFormat('ru-RU').format(cost)} ₽/м²`}</span>
                </div>
                <p className='kitchen__short-description'>{short}</p>
            </div>
        </article>
    )
}

export default Kitchen