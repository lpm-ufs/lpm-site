import data from "../../data/index.json";

// Estilo para remover o sublinhado do link de e-mail
const emailLinkStyle = {
  textDecoration: "none",
   // Use a cor de texto padrão
};

export default function ContactMe() {
  return (
    <section className="portfolio--section" id="testimonial2">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Contato</h2>
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
