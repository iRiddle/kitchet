import React from 'react'

import './style.scss'

const ButtonSize = ({ title, onClick, id }) => {
    return (
        <button onClick={onClick} id={id} className='btn-size'>
            {title}
        </button>
    )
}

export default ButtonSize
