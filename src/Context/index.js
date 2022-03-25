import React, { useEffect, useState } from 'react'

const GlobalContext = React.createContext()

const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider
      value={{
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
export { GlobalProvider }