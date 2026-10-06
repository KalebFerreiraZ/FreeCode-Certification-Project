import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App.jsx'
import DOCS from './learn.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App></App>}></Route>
    <Route path='/learn' element={<DOCS></DOCS>}></Route>
  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
