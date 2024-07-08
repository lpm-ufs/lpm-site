import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

import { FaInstagram, FaDribbble } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <div className="footer__socials">
                    <a href="https://www.instagram.com/lpm.ufs/" className="footer__social-link">
                        <FaInstagram />
                    </a>

                    <a href="mailto:alexandre.ramos@academico.ufs.br" className="footer__social-link">
                        <MdOutlineEmail />
                    </a>


                </div>

                <p className="footer__copyright text-cs">
                </p>

                <p className="footer__copyright text-cs">
                    Developed by <span>José Dhonatas</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer