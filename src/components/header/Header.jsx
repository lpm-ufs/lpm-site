import React, { useEffect, useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from 'react-icons/fa';
import { linksPT, linksEN, linksFR } from '../../Data'; // Importa os dados de links para cada idioma
import { BsSun, BsMoon } from 'react-icons/bs';
import './header.css';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import shapeOne from '../../assets/shape-1.png';
import usa from '../../assets/bandeiras/usa.svg';
import france from '../../assets/bandeiras/france.svg';
import brazil from '../../assets/bandeiras/brazil.svg';
import { useTranslation } from 'react-i18next';

const getStorageTheme = () => {
    let theme = 'light-theme'; 
    return theme;
}

const Header = () => {
    const { i18n } = useTranslation();
    const [showMenu, setShowMenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const [theme, setTheme] = useState(getStorageTheme()); 

    // Seleciona os links de navegação conforme o idioma atual
    const linksData = i18n.language === 'fr' ? linksFR
                    : i18n.language === 'en' ? linksEN
                    : linksPT; // Padrão para português

    const scrollTop = () => {
        animateScroll.scrollToTop();
    };

    const changeNav = () => {
        setScrollNav(window.scrollY >= 80);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
        setTheme(newTheme);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => window.removeEventListener('scroll', changeNav);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);
    }, [showMenu]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const renderFlags = () => {
        if (i18n.language === 'pt') {
            return (
                <>
                    <img src={usa} alt="Inglês" className="flag" onClick={() => changeLanguage('en')} />
                    <img src={france} alt="França" className="flag" onClick={() => changeLanguage('fr')} />
                </>
            );
        } else if (i18n.language === 'en') {
            return (
                <>
                    <img src={brazil} alt="Português" className="flag" onClick={() => changeLanguage('pt')} />
                    <img src={france} alt="França" className="flag" onClick={() => changeLanguage('fr')} />
                </>
            );
        } else if (i18n.language === 'fr') {
            return (
                <>
                    <img src={brazil} alt="Português" className="flag" onClick={() => changeLanguage('pt')} />
                    <img src={usa} alt="Inglês" className="flag" onClick={() => changeLanguage('en')} />
                </>
            );
        }
    };

    return (
        <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
            <nav className="nav">
                <Link to='/' onClick={scrollTop} className="nav__logo text-cs">
                    LPM
                </Link>

                <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                    <div className="nav__data">
                        <ul className="nav__list">
                            {linksData.map(({ name, path }, index) => (
                                <li className="nav__item" key={index}>
                                    <Link
                                        className='nav__link text-cs'
                                        to={path}
                                        spy={true}
                                        hashSpy={true}
                                        smooth={true}
                                        offset={-150}
                                        duration={500}
                                        onClick={() => setShowMenu(!showMenu)}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="header__socials">
                            <a href="https://www.instagram.com/lpm.ufs/" className="header__social-link">
                                <FaInstagram />
                            </a>
                            <a href="mailto:alexandre.ramos@academico.ufs.br" className="header__social-link">
                                <MdOutlineEmail />
                            </a>
                        </div>
                    </div>
                    <div className="section__deco deco__left header__deco">
                        <img src={shapeOne} alt="" className='shape' />
                    </div>
                </div>

                <div className="nav__btns">
                    <div className="language__flags">
                        {renderFlags()}
                    </div>

                    <div className="theme__toggler" onClick={toggleTheme}>
                        {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                    </div>

                    <div
                        className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
