import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyled } from "./GlobalStyled.js";
import { PosterProvider } from "../Data/Posters/poster.context.jsx";
import { GenreProvider } from "../Data/Genre/genre.context.jsx";
import { AuthProvider } from "../Data/Authentication/AuthProvider.jsx";

import App from './App.jsx'
import { GenreRelProvider } from "../Data/GenrePostRel/GenPostRel.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled />
    <BrowserRouter>
      <GenreProvider>
        <PosterProvider>
          <GenreRelProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </GenreRelProvider>
        </PosterProvider>
      </GenreProvider>
    </BrowserRouter>
  </StrictMode>,
)
