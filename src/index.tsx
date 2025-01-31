import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import '@fontsource-variable/rubik'
import App from './App'
import './styles/index.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
