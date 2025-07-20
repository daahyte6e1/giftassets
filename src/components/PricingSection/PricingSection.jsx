import React from "react";
import "./PricingSection.css";

const pricingData = [
  {
    name: "Start",
    price: "Free",
    rps: "5"
  },
  {
    name: "Plus",
    price: "$10",
    rps: "50"
  },
  {
    name: "Pro",
    price: "$100",
    rps: "500"
  }
]

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <section className="description-block">
        <h2>Цены</h2>
        <p>Платный доступ к API обеспечивает бесперебойную работу сервиса, стабильное качество услуг и позволяет инвестировать в его постоянное обновление и улучшение.</p>
      </section>
      <div className="pricing-table">
        <p>API</p>
        {pricingData.map((item) => (
          <div className="pricing-row card-block" key={item.name}>
            <div className="left-block">  
              <span className="name">{item.name}</span>
              <span className="value">{item.price}</span>
            </div>
            <div className="right-block">
              <span className="name">RPS</span>
              <span className="value">{item.rps}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection; 