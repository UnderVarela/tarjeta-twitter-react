import { useState } from "react"

export function TarjetaTwitter( { userName } ) {
 const [isFollowing, setIsFollowing] = useState(false)
  return (
    <div className='grid items-center justify-center grid-cols-3 gap-2 p-1 bg-slate-300 hover:bg-slate-400' >
      <img
        className='w-full rounded-full'
        src={ import.meta.env.VITE_URL + userName}
        alt={`@${userName}`}
      />
      <div className='flex flex-col gap-2'>
        <strong>{userName}</strong>
        <span>{`@${userName ?? 'Sin nombre'}`}</span>
      </div>
      <div>
        <button onClick={() => setIsFollowing(!isFollowing)}
          className='px-4 py-1 font-medium text-center bg-white border rounded-full shadow-sm focus:outline-none text-black-600 hover:bg-blue-100 border-black-200'
        >
          {
            isFollowing ? 'Siguiendo' : 'Seguir'
          }
        </button>
      </div>
    </div>
  )
}