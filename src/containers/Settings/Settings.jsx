import React from 'react'
import InputRange from 'react-input-range';

import Select from '../../components/Select'

import closeSvg from '../../img/icons/close.svg'

import './style.scss'

const Settings = ({ settingsSelect }) => {
    return (
        <section className='settings'>
            <div className='settings__container'>
                {settingsSelect.map(({ id, title, options }, index) =>
                    <Select key={id} title={title} options={options} className='settings__select' isColored={index === settingsSelect.length - 1} />
                )}
                <div className='settings__divider' />
                <label className='settings__check'>
                    <input type="checkbox" />
                    <span></span>
                        Только со скидкой
                </label>
                <label className='settings__start-by'>
                    <span>Сначала</span>
                    <Select title={'Новинки'} options={settingsSelect[0].options} className='settings__select' />
                </label>
                <label className='settings__range'>
                    <InputRange maxValue={2000} minValue={0} />
                </label>
                <button className='settings__close'><img src={closeSvg} alt="Закрыть" /></button>
            </div>
        </section>
    )
}


export default Settings