import { PosterPageStyled } from "./PosterPageStyled";
import { PosterComponent } from "../../Components/Posters/poster.component";
import { GenreComponent } from "../../Components/Genre/genre.component";


export const PostersPage = () => {
    return (
        <>
        <PosterPageStyled>

            <div>
                <h2>Plakater</h2>
                <GenreComponent />
            </div>

            
            <PosterComponent />
           

        </PosterPageStyled>
        </>
    )
}