import { atom } from 'jotai'

export const appInfoAtom = atom({
  name: 'MediSync',
  description:
    'A modern and intuitive platform designed to simplify access to healthcare terminologies.'
})

// Atom to store dark mode state
export const isDarkModeAtom = atom(
  () => {
    const savedPreference = localStorage.getItem('darkMode')
    if (savedPreference) {
      return savedPreference === 'enabled'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  },
  (_get, set, newMode: boolean) => {
    set(isDarkModeAtom, newMode)
  }
)

// Atom to toggle dark mode
export const toggleDarkModeAtom = atom(
  (get) => get(isDarkModeAtom),
  (get, set) => {
    const newMode = !get(isDarkModeAtom)
    set(isDarkModeAtom, newMode)
    document.documentElement.classList.toggle('dark', newMode)
    localStorage.setItem('darkMode', newMode ? 'enabled' : 'disabled')
  }
)
