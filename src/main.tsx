import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import App from './App.tsx'

const domNode = document.getElementById('root')!;
const root = createRoot(domNode)

root.render(
< App />
)