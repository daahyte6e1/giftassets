import React from 'react'
import './ArchitectureSection.css'

const ArchitectureSection = () => {
  const apiEndpoints = [
    {
      method: 'GET',
      path: '/v1/gifts/get_gift_by_name/{name}',
      type: 'get'
    },
    {
      method: 'POST',
      path: '/v1/gifts/gift_by_name',
      type: 'post'
    },
    {
      method: 'GET',
      path: '/v1/gifts/get_gift_by_user/{user}',
      type: 'get'
    },
    {
      method: 'POST',
      path: '/v1/gifts/gift_by_user',
      type: 'post'
    }
  ]

  return (
    <section className='api-section'>
      <h2>Architecture</h2>
      <div className='api-list'>
        {apiEndpoints.map((endpoint, index) => (
          <div key={index} className='api-item'>
            <span className={endpoint.type + " label"}>{endpoint.method}</span> {endpoint.path}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ArchitectureSection 