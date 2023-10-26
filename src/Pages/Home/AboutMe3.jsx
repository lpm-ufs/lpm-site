/*export default function AboutMe3() {
    return (
      <section id="AboutMe3" className="about--section2">
        <div className="about--section--img">
          <img src="./img/extensao.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills-section--heading">Projetos de Extensão</h1>
            <p className="hero--section-description">
            O laboratório de projetos mecânicos desenvolve projetos de extensão com alunos de graduação e pós-graduação de todos os cursos da UFS, dentre as atividades estão a Zenith Rocketry, equipe de foguetes e cubesats criadas em 2022, e a oficina de minifoguetes e astronomia.    
                     </p>

          </div>
        </div>
      </section>
    );
  }
  */

  
export default function AboutMe2() {
  return (
    <section id="AboutMe3" className="hero--section" style={{ backgroundColor: 'white' }}>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">Projetos de Extensão</h1>
          <p className="hero--section-description">
          O laboratório de projetos mecânicos desenvolve projetos de extensão com alunos de graduação e pós-graduação de todos os cursos da UFS, dentre as atividades estão a Zenith Rocketry, equipe de foguetes e cubesats criadas em 2022, e a oficina de minifoguetes e astronomia.            </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/extensao.png" alt="Hero Section" />
      </div>
    </section>
  );
}