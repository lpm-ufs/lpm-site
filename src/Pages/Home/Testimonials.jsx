import data from "../../data/index.json";

export default function Testimonial() {
  const studentCi = data?.student_ci || [];
  const studentsInGroupsOfThree = [];

  // Dividir os dados em grupos de trêss
  for (let i = 0; i < studentCi.length; i += 3) {
    studentsInGroupsOfThree.push(studentCi.slice(i, i + 3));
  }

  return (
    <section className="testimonial--section" id="students">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h4 className="sections--heading">Alunos Vinculados ao Laboratório</h4>
          <p className="sub--title">Alunos de Iniciação Cientifica e Tecnológica</p>
        </div>
      </div>
      {studentsInGroupsOfThree.map((group, groupIndex) => (
        <div key={groupIndex} className="portfolio--section--container">
          {group.map((item, index) => (
            <div key={index} className="testimonial--section--card">
              <div className="testimonial--section--card--review"></div>
              <div className="testimonial--section--card--author--detail">
                <img src={item.src} alt="Avatar" width="75" height="76" />
                <div>
                  <p className="text-md testimonial--author--name">
                    {item.author_name}
                  </p>
                  <p className="text-md testimonial--author--designation">
                    {item.author_designation}
                  </p>
                </div>
              </div>
              <p className="text-md">{item.description}</p>
            </div>
          ))}
        </div>
      ))}
      <br></br>
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Alunos de Trabalho de Conclusão de Curso</p>
        </div>
      </div>
      <br></br>
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Alunos de Pós-graduação</p>
        </div>
      </div>
    </section>
  );
}
