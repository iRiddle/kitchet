import React from 'react'
import Select, { components } from 'react-select'
import cn from 'classnames'

import checkSvg from '../../img/icons/check.svg'

import './style.scss'

const { Option } = components;

const IconOption = props => {
    const { data: { label, disabled } } = props

    return (
        <Option {...props} className='select__option'>
            <span>{label}</span>
            {
                !disabled && (
                    <img
                        src={checkSvg}
                        alt='Доступно'
                    />
                )
            }
        </Option>
    )
}

const SelectComponent = ({ title, options, className, isColored }) => {
    return (
        <Select
            options={options}
            placeholder={title}
            className={cn('select', className, isColored && 'select--isColored')}
            components={{ Option: IconOption }}
            isOptionDisabled={(option) => option.disabled === 'yes'}
        />
    )
}
export default SelectComponent
