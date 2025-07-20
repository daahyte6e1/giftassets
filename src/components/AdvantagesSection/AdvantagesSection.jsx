import React from "react";
import "./AdvantagesSection.css";
import ProblemIcon from "../../assets/ProblemIcon";
import SolutionIcon from "../../assets/SolutionIcon";

const AdvantagesSection = () => {
  const advantages = [
    {
      problem: "Данные разрознены по разным эндпоинтам, нет удобной агрегированной статистики.",
      solution: "Единый API, который объединяет все данные и предоставляет удобный доступ."
    },
    {
      problem: "Данные разрознены по разным эндпоинтам, нет удобной агрегированной статистики.",
      solution: "Единый API, который объединяет все данные и предоставляет удобный доступ."
    },
    
    
  ];

  return (
    <section className="advantages-section">
      <h2>Преимущества</h2>
      {advantages.map((item, index) => (
        <div key={index} className="advantage-card">
          <div className="problem-solution-container">
            <div className="card-block">
              <ProblemIcon width={44} height={34} />
              <section className="description-block">
                <h3 className="title">Проблема</h3>
                <div className="description">{item.problem}</div>
              </section>
            </div>
            <div className="card-block">
              <SolutionIcon width={44} height={34} />
              <section className="description-block">
                <h3 className="title">Решение</h3>
                <div className="description">{item.solution}</div>
              </section>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AdvantagesSection; 