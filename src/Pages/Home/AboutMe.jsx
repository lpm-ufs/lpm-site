export default function AboutMe() {
  return (
    <section id="AboutMe" className="hero--section">
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">Sobre</h1>
          <p className="hero--section-description">
            O laboratório de Projetos Mecânicos do Departamento de Engenharia Mecânica da Universidade Federal de Sergipe desenvolve ensino, pesquisa e extensão em diversos ramos da engenharia. O laboratório faz parte do Centro Tecnológico em Engenharia Avançada (CTEA), condomínio multiusuário da UFS e atende diariamente alunos de pesquisa e extensão.
          </p>
          <p className="hero--section-description">
            Desenvolve pesquisas em aeronaves remotamente pilotadas, enxames de drones, metamateriais, visão computacional, Structural Health Monitoring, metrologia, inteligência artificial, fotogrametria e energias renováveis, bem como desenvolve projetos de extensão como a oficina de minifoguetes e astronomia e equipes de foguetes e cubesats da UFS (Zenith).</p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/projeto_acao.png" alt="Hero Section" />
      </div>
    </section>
  );
}