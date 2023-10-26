
export default function AboutMe2() {
  return (
    <section id="AboutMe2" className="hero--section" style={{ backgroundColor: 'white' }}>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">Equipamentos</h1>
          <p className="hero--section-description">
            O laboratório conta com ampla infraestrutura, como sistemas avançados de metrologia, como máquina de medir coordenadas por braço articulado com ponta de rubi e por escâner, desempeno, balança analítica de precisão, câmeras nos espectros visível e infravermelho, equipamentos de metrologia analógico, aeronaves remotamente pilotadas, impressoras 3D,  transmissores Lorawan, gateways 915 MHz, osciloscópios, fonte de alimentação, gerador de funções, sistema eletrônicos básicos (Esp32, Arduino, Haspberry etc), computadores com alta capacidade de processamento (32 GB de RAM) e diversos softwares de engenharia.             </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/equipamentos.png" alt="Hero Section" />
      </div>
    </section>
  );
}