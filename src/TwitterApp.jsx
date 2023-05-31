import React from 'react'
import { TarjetaTwitter } from './components/TarjetaTwitter'

const users = [
  {
    id: 1,
    userName: 'Bars'
  },

  {
    id: 2,
    userName: 'wptavern'
  },

  {
    id: 3,
    userName: 'elementor'
  },

]



function TwitterApp() {
  return (
    <main>

      <h1>TwitterApp de UNDER</h1>

      <div className='card-twitter'>
        <h2>Tal vez te guste</h2>
        
      
      <div className='max-w-md users'>


        {
          users.map(function (user) {
            const { id, userName } = user
            return (
             <TarjetaTwitter key={id} userName={userName}/>
            )
          })
        }

      </div>
      </div>
    </main>
  )
}

export default TwitterApp