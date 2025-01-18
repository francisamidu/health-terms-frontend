import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from './App'
import './styles/index.css'
import '@fontsource-variable/rubik'
import 'pure-react-carousel/dist/react-carousel.es.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
