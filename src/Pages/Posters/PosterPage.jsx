import { PosterPageStyled } from "./PosterPageStyled";
import { GenreComponent } from "../../Components/Genre/genre.component";
import { Outlet } from "react-router-dom";


export const PostersPage = () => {
    return (
        <>
        <PosterPageStyled>

            <div>
                <h2>Plakater</h2>
                <GenreComponent />
            </div>

            <div>
                <Outlet />
            </div>
           

        </PosterPageStyled>
        </>
    )
}