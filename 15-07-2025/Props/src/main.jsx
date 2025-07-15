import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import './ex.css'
// import Good from '../ex.jsx'
// import Footer from './ExFooter'
// import Student from './student'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Student/> */}
    {/* <Footer/> */}
  </StrictMode>,
)