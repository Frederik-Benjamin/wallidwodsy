import { FrontPageStyled } from "./FrontPageStyled"
import { FeaturedPosters } from "../../Components/FeaturedPosters/FeaturedPosters"
import DisneyPic from "../../Assets/Images/waltDisney.png"

export const FrontPage = () => {
    return (
        <>
        <FrontPageStyled>
            
           <div className="OfferOfMonth">
                <img className="disneyImage" src={DisneyPic} alt="#" />
                <div className="DisneyOffer">
                    <h3>
                        <p>Op til</p>
                        <p><span>-40%</span></p>
                        <p>Walt Disney - Pixar</p>
                    </h3>
                    <button className="BuyNow">Køb Nu</button>
                </div>
           </div>
            

            <h2>Populære</h2>
            
            <FeaturedPosters />

        </FrontPageStyled>
        </>
    )
}