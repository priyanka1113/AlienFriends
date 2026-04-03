import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './containers/App.jsx';
import 'tachyons'
//import  { aliens } from './aliens.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>,
)
