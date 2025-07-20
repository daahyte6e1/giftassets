import React from 'react'

import MenuIcon from './assets/MenuIcon'
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection'
import MarketSection from './components/MarketSection/MarketSection'
import PricingSection from './components/PricingSection/PricingSection'
import TeamSection from './components/TeamSection/TeamSection.jsx'
import ArchitectureSection from './components/ArchitectureSection/ArchitectureSection'
import LiveTechSection from './components/LiveTechSection/LiveTechSection'

import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landing-root'>
      <header className='landing-header'>
        <MenuIcon className='menu-icon' />
        <span className='logo-text'>GIFT API</span>
      </header>
      <main className='landing-main'>
        <section className='intro-section'>
          <h1>Мы — независимый агрегатор данных о Telegram-подарках.</h1>
          <p className='intro-desc'>Наш API собирает информацию из всех доступных источников и предоставляет её в едином, удобном формате.</p>
          <div className='intro-buttons'>
            <button>Связаться</button>
            <button className='secondary'>Документация</button>
          </div>
        </section>
        <LiveTechSection />
        <AdvantagesSection />
        <MarketSection />
        <PricingSection />
        <TeamSection />
        <ArchitectureSection />
      </main>
      <footer className='landing-footer'>
        <a href='#'>About</a>
        <a href='#'>Contact us</a>
        <a href='#'>Telegram channel</a>
      </footer>
    </div>
  )
}

export default LandingPage 