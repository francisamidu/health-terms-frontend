import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from './components/App'
import './styles/index.css'
import '@fontsource-variable/rubik'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
