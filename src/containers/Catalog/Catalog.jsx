import React from 'react'

import ButtonSize from '../../components/ButtonSize'
import Kitchen from '../../components/Kitchen'

import './style.scss'

const Catalog = ({ kitchens, sizes }) => {
    return (
        <section className='catalog'>
            <div className='catalog__sizes-container'>
                {sizes.map(({ id, title }) =>
                    <ButtonSize key={id} id={id} title={title} />
                )}
            </div>
            {kitchens.map(({ id, title, short, cost, state, img, details }) =>
                <Kitchen key={id} title={title} short={short} cost={cost} state={state} img={img} details={details} className='catalog__kitchen' />
            )}
        </section>
    )
}

export default Catalog