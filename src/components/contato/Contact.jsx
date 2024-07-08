import axios from 'axios'
import React, { useState } from 'react'
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa'
import profileImg from '../../assets/pessoal/alexandre.png'
import './contato.css'

const Contact = () => {


    return (
        <section className="contato section" id="contato">
            <h2 className="section__title text-cs">Contato</h2>
            <p className="section__subtitle">
                {/*Let's <span>Talk About Ideas</span>*/}
            </p>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>

                        <h3 className="contact__card-title">Endereço</h3>
                        <p className="contact__card-data">Avenida Marechal Rondon Jardim s/n - Rosa Elze, São Cristóvão - SE, 49100-000.                        </p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>

                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">alexandre.ramos@academico.ufs.br</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook />
                        </span>

                        <h3 className="contact__card-title">Ramal</h3>
                        <p className="contact__card-data">6315</p>
                    </div>
                </div>

                <div className="home__img-wrapper">
                    <div className=" home__banner">
                        <img src={profileImg} alt="" className='home__profile' />
                    </div>

                    <p className="home__data home__data-one">
                        <span className="text-sm2 text-cs">
                            Alexandre Carlos Rodrigues Ramos
                        </span>
                    </p>

                    <p className="maior home__data home__data-two">
                        <span className="text-sm3 text-cs">
                        Doutorado em Engenharia Mecânica pela EESC-USP, Mestrado em Engenharia Mecânica pelo ITA, e graduação em Engenharia Mecatrônica pela EESC-USP.                        </span>
                    </p>

                  
                </div>
            </div>



            <div className="section__bg-wrapper">
                {/*<span className="bg__title">Contact Me</span>*/}
            </div>
        </section>
    )
}

export default Contact