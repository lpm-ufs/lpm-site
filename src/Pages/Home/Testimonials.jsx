import data from "../../data/index.json";

export default function Testimonial() {
  const filteredStudentCi = data?.student_ci?.filter(item => item.id < 4);

  return (
    <section className="testimonial--section" id="students">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Alunos Vinculados ao Laboratório</h2>
          <p className="sub--title">Alunos de Iniciação Cientifica e Tecnológica</p>
        </div>
      </div>
      <div className="portfolio--section--container">
        {filteredStudentCi?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--review">
            </div>
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
