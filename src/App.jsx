import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation";
import { Footer } from "./Components/Footer/Footer";

import { FrontPage } from "./Pages/FrontPage/FrontPage";
import { PostersPage } from "./Pages/Posters/PosterPage";
import { SinglePosterPage } from "./Pages/SinglePoster/SingplePoster.page";
import { AboutUsPage } from "./Pages/About/AboutPage";
import { PosterComponent } from "./Components/Posters/poster.component";
import { ContentContainer } from "./Components/ContentContainer/ContentContainer";

function App() {
  return (
    <>
      <Navigation />
      <ContentContainer>
        <Routes>

          {/* FrontPage */}
          <Route path="/" element={<FrontPage />} />

          {/* Posters Section */}
          <Route path="/Posters" element={<PostersPage />}>
            <Route index element={<PosterComponent />} />
            <Route path=":genre_id" element={<PosterComponent />} />
          </Route>

          {/* Single Poster */}
          <Route path="/Posters/:genre_id/:poster_id" element={<SinglePosterPage />} />

          {/* About Us Page */}
          <Route path="/About" element={<AboutUsPage />} />

        </Routes>
      </ContentContainer>
      <Footer />
    </>
  );
}

export default App;
