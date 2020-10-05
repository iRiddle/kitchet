import React from 'react'
import cn from 'classnames'

import './style.scss'

const ContainerLayout = ({ children, colorStyle }) => {
    return (
        <div className={cn('layout', colorStyle === 'grey' ? 'layout--grey' : 'layout--white')}>
            <div className='layout__container'>
                {children}
            </div>
        </div>
    )
}

export default ContainerLayout
