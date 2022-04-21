import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

  const user = {
    email: 'elisperezmusic@gmail.com',
    id: 1234,
    name: 'Elis',
  }
  return (
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
    
  )
}
