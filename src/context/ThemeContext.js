import { createContext } from 'react'

export const ThemeContext =  createContext()

export function ThemeProvider({ children }) {

  // cusom logic

  return (
    <ThemeContext.Provider value={{ color: 'black' }}>
      {children}
    </ThemeContext.Provider>
  )
}