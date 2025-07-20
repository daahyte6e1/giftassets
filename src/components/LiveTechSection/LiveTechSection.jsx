import React, { useState, useEffect, useRef } from 'react'
import './LiveTechSection.css'

const WS_URL = 'wss://giftasset.pro/api/v1/gifts/ws/sales_updates?api_key=test';

const LiveTechSection = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef(null);
  const pingIntervalRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);
    wsRef.current = ws;
    ws.onopen = () => {
      setIsConnected(true);
      if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
      pingIntervalRef.current = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send('ping');
        }
      }, 30000);
    };
    ws.onmessage = (event) => {
      try {
        if (event.data === 'pong') return;

        const data = JSON.parse(event.data);
        if (data.event === 'new_sale') {
          setImages(prev => {
            const next = [data.data.gift.media.pics.large, ...prev];
            return next.slice(0, 4);
          });
        }
      } catch (e) {
        setError('Ошибка парсинга данных');
      }
    };
    ws.onerror = (e) => {
      setError('Ошибка WebSocket соединения');
      setIsConnected(false);
    };
    ws.onclose = () => {
      setError('WebSocket соединение закрыто');
      setIsConnected(false);
      if (pingIntervalRef.current) {
        clearInterval(pingIntervalRef.current);
        pingIntervalRef.current = null;
      }
    };
    return () => {
      ws.close();
      if (pingIntervalRef.current) {
        clearInterval(pingIntervalRef.current);
        pingIntervalRef.current = null;
      }
    };
  }, []);

  // Создаем массив из 4 элементов для отображения
  const displayCircles = Array.from({ length: 4 }, (_, index) => {
    return images[index] || null; // null означает пустой круг
  });

  return (
    <section className='live-tech-section'>
      <section className='live-data-placeholder'>
        <div className='live-badge'>
          <span className={`live-dot ${isConnected ? 'live-dot-animated' : ''}`} />
          <span className='live-label'>Live Data</span>
        </div>
        <div className='live-circles'>
          {displayCircles.map((imageUrl, index) => (
            imageUrl ? (
              <img 
                key={`image-${index}`} 
                src={imageUrl} 
                alt={`Live gift ${index + 1}`}
                className='circle'
              />
            ) : (
              <span key={`empty-${index}`} className='circle' />
            )
          ))}
        </div>
      </section>
      <section className='tech-section'>
        <h2>Технология</h2>
        <p>Источник: TONNEL, Mrkt, Portals, Fragment. Данные обновляются в реальном времени.</p>
      </section>
    </section>
  )
}

export default LiveTechSection 