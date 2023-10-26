import data from "../../data/index.json";

export default function Testimonial() {
  const studentCi = data?.student_ci || [];
  const studentsInGroupsOfThree = [];

  // Dividir os dados em grupos de três
  for (let i = 0; i < studentCi.length; i += 3) {
    studentsInGroupsOfThree.push(studentCi.slice(i, i + 3));
  }

  return (
    <section className="testimonial--section" id="students">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Alunos de Iniciação Cientifica e Tecnológica</h2>
        </div>
      </div>
      {studentsInGroupsOfThree.map((group, groupIndex) => (
        <div key={groupIndex} className="portfolio--section--container">
          {group.map((item, index) => (
            item.id == 10 ? <div key={index} className="testimonial--section--card2">
              <div className="testimonial--section--card--author--detail">
              </div>
            </div> : (
              <div key={index} className="testimonial--section--card">
                <div className="testimonial--section--card--review"></div>
                <div className="testimonial--section--card--author--detail">
                <img className="rounded-image" src={item.src} alt="Avatar" />
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
            )
          ))}
        </div>
      ))}
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Alunos de Trabalho de Conclusão de Curso</h2>
        </div>
      </div>

      <div className="portfolio--section--container">
        {data?.students_tcc?.map((item, index) => (
          item.id == 10 ? <div key={index} className="testimonial--section--card2">
            <div className="testimonial--section--card--author--detail">
            </div>
          </div> : (
            <div key={index} className="testimonial--section--card">
              <div className="testimonial--section--card--review"></div>
              <div className="testimonial--section--card--author--detail">
              <img className="rounded-image" src={item.src} alt="Avatar" />
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
          )
        ))}
      </div>

      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Alunos de Pós-graduação</h2>
        </div>
      </div>

      <div className="portfolio--section--container">
        {data?.students_pos?.map((item, index) => (
          item.id === 10 ? <div key={index} className="testimonial--section--card2">
            <div className="testimonial--section--card--review"></div>
            <div className="testimonial--section--card--author--detail">
            </div>
          </div> : (
            <div key={index} className="testimonial--section--card3">
              <div className="testimonial--section--card--review"></div>
              <div className="testimonial--section--card--author--detail">
              <img className="rounded-image" src={item.src} alt="Avatar" />
                <div>
                  <p className="text-md testimonial--author--name">
                    {item.author_name}
                  </p>
                  <p className="text-md testimonial--author--designation">
                    {item.author_designation}
                  </p>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
}
