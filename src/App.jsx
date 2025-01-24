import { Routes, Route } from "react-router-dom";

import { Navigation } from "./Components/Navigation/Navigation";

import { FrontPage } from "./Pages/FrontPage/FrontPage";
import { PostersPage } from "./Pages/Posters/PosterPage";

function App() {

  return (
    <>
    <Navigation />
       
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Posters" element={<PostersPage />} />
      </Routes>



    </>
  )
}

export default App
