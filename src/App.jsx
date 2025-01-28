import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation";
import { Footer } from "./Components/Footer/Footer";

import { FrontPage } from "./Pages/FrontPage/FrontPage";
import { PostersPage } from "./Pages/Posters/PosterPage";
import { ContentContainer } from "./Components/ContentContainer/ContentContainer";
import { SinglePosterPage } from "./Pages/SinglePoster/SingplePoster.page";

function App() {

  return (
    <>
    <Navigation />
       <ContentContainer>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/Posters" element={<PostersPage />} />
          <Route path="/Posters/:slug" element={<SinglePosterPage />} />
        </Routes>
      </ContentContainer>
    <Footer />
    </>
  )
}

export default App
