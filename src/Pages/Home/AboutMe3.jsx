import {useTranslation} from 'react-i18next';

  
export default function AboutMe2() {
  const {t} = useTranslation();

  return (
    <section id="AboutMe3" className="hero--section" style={{ backgroundColor: 'white' }}>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">
          {t('Projetos de Extensão')}
          </h1>
          <p className="hero--section-description">
            {t('t1_extensao')}
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/extensao.png" alt="Hero Section" />
      </div>
    </section>
  );
}