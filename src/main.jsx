import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PosterProvider } from "./Utils/Data/poster.context.jsx";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PosterProvider>
        <App />
      </PosterProvider>
    </BrowserRouter>
  </StrictMode>,
)
