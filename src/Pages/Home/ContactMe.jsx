import data from "../../data/index.json";
import {useTranslation} from 'react-i18next';

// Estilo para remover o sublinhado do link de e-mail
const emailLinkStyle = {
  textDecoration: "none",
   // Use a cor de texto padrão
};

export default function ContactMe() {
  const {t} = useTranslation();
  return (
    <section className="portfolio--section" id="ContactMe">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
        <h1 className="skills-section--heading">{t('Contato')}</h1>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial2?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--author--detail">
              <img src={item.src} alt="Avatar" width="105" height="106" />
              <div>
                <p className="text-md testimonial--author--name">
                  {item.author_name}
                </p>

                {/* Tornando o e-mail clicável sem sublinhado */}
                <p className="text-md testimonial--author--designation">
                  <a href={`mailto:${item.email}`} style={emailLinkStyle}>
                    {item.email}
                  </a>
                </p>
              </div>
            </div>
            <p className="text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
