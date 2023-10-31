import {useTranslation} from 'react-i18next';

export default function AboutMe() {
  const {t} = useTranslation();

  return (
    <section id="AboutMe" className="hero--section">
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">{t('Sobre')}</h1>
          <p className="hero--section-description">
            {t('t1_sobre')}
          </p>
          <p className="hero--section-description">
          {t('t1_sobre')}</p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/projeto_acao.png" alt="Hero Section" />
      </div>
    </section>
  );
}