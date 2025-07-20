import React from "react";
import "./MarketSection.css";

const MarketSection = () => {
  return (
    <section className="market-section">
      <section className="description-block">
        <h2>Рынок</h2>
        <p>Наши клиенты: проекты любых размеров, разработчики инфраструктуры для Telegram-подарков.</p>
      </section>
      <div className="market-grid">
        {[...Array(6)].map((_, i) => (
          <div className="market-item" key={i}>
            <span className="circle" />
            <span className="market-name">Name</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketSection; 