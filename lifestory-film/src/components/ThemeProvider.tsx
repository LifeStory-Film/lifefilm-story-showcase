'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  // Read saved preference on mount — always default to dark if no saved preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lifestory-theme') as Theme | null
      setTheme(saved === 'light' ? 'light' : 'dark')
    } catch {
      // localStorage not available (e.g. SSR fallback)
    }
  }, [])

  // Apply class to <html> and persist to localStorage
  useEffect(() => {
    const html = document.documentElement
    html.classList.remove('dark', 'light')
    html.classList.add(theme)
    try {
      localStorage.setItem('lifestory-theme', theme)
    } catch {
      // ignore
    }
  }, [theme])

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
