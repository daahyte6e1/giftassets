import React from "react";
import "./AdvantagesSection.css";
import ProblemIcon from "../../assets/ProblemIcon";
import SolutionIcon from "../../assets/SolutionIcon";

const AdvantagesSection = () => {
  const advantages = [
    {
      problem: "Разрозненные данные - данные разбиты по разным сервисам, нет единого стандарта и источника",
      solution: "Единый API который объединяет все данные и предоставляет удобный доступ к ним"
    },
    {
      problem: "Непрозрачность рынка - Не видно общей статистики и цен, не предоставлены инструменты для анализа",
      solution: "Сбор различных метрик, исторические отчеты и визуализации"
    },
    {
      problem: "Отсутствие интеграций - разработчики вынуждены вручную разрабатывать собственную архитектуру для отображения данных",
      solution: "Виджеты для сайтов и телеграм каналов, real-time стримы различных активностей"
    },
    {
      problem: "Отсутствие готового инструментария - владельцы проектов сталкиваются с техническими трудностями при создании сервисов",
      solution: "Удобный кейс который возможно интегрировать в приложение, вебсайт, игру"
    }
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