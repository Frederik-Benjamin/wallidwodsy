import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyled } from "./GlobalStyled.js";
import { PosterProvider } from "../Data/Posters/poster.context.jsx";
import { GenreProvider } from "../Data/Genre/genre.context.jsx";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled />
    <BrowserRouter>
      <GenreProvider>
        <PosterProvider>
          <App />
        </PosterProvider>
      </GenreProvider>
    </BrowserRouter>
  </StrictMode>,
)
