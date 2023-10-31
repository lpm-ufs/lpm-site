import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';
import { changeLanguage } from "i18next";

function Navbar() {
  const { t } = useTranslation();

  const changeToEnglish = () => {
    changeLanguage("en-US");
  };

  const changeToPortuguese = () => {
    changeLanguage("pt-BR");
  };

  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/logo3.png" alt="Logoipsum" height="40" />
      </div>


      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              {t('Inicio')}
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe2"
              className="navbar--content"
            >
              {t('Equipamentos')}
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              {t('Projetos de Pesquisa')}
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe3"
              className="navbar--content"
            >
              {t('Projetos de Extensão')}
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="students"
              className="navbar--content"
            >
              {t('Alunos')}
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Publish"
              className="navbar--content"
            >
              {t('Publicações')}
            </Link>
          </li>


        </ul>
      </div>

      <div>
        <img
          src="../img/eua.png"
          onClick={changeToEnglish}
          className="flag-icon"
        />
        <img
          src="../img/br.png"
          onClick={changeToPortuguese}
          className="flag-icon"
        />
      </div>
      <Link
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="ContactMe"
        className=""
      >
        {t('Contato')}
      </Link>

    </nav>
  );
}

export default Navbar;
