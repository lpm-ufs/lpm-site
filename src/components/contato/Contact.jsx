import axios from 'axios'
import React, { useState } from 'react'
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa'
import profileImg from '../../assets/pessoal/alexandre.png'
import { useTranslation } from 'react-i18next'
import './contato.css'

const Contact = () => {
    const { t } = useTranslation()

    return (
        <section className="contato section" id="contato">
            <h2 className="section__title text-cs">{t('contactTitle')}</h2>
            <p className="section__subtitle">
                {/* Let's <span>Talk About Ideas</span> */}
            </p>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>

                        <h3 className="contact__card-title">{t('contactAddressTitle')}</h3>
                        <p className="contact__card-data">{t('contactAddressData')}</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>

                        <h3 className="contact__card-title">{t('contactEmailTitle')}</h3>
                        <p className="contact__card-data">{t('contactEmailData')}</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook />
                        </span>

                        <h3 className="contact__card-title">{t('contactExtensionTitle')}</h3>
                        <p className="contact__card-data">{t('contactExtensionData')}</p>
                    </div>
                </div>

                <div className="home__img-wrapper">
                    <div className=" home__banner">
                        <img src={profileImg} alt="" className='home__profile' />
                    </div>

                    <p className="home__data home__data-one">
                        <span className="text-sm2 text-cs">
                            {t('contactName')}
                        </span>
                    </p>

                    <p className="maior home__data home__data-two">
                        <span className="text-sm3 text-cs">
                            {t('contactBio')}
                        </span>
                    </p>
                </div>
            </div>

            <div className="section__bg-wrapper">
                {/* <span className="bg__title">Contact Me</span> */}
            </div>
        </section>
    )
}

export default Contact
