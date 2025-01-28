import { AboutStyled } from "./AboutStyled"
import { Grid } from "../../Components/Grid/Grid"
import KFrede from "../../Assets/Images/KFrederik.webp"

export const AboutUsPage = () => {
    return (
        <AboutStyled>
                <Grid gridStyle="aboutpage-grid">
                <article>
                    <h3>Om Os</h3>

                    <p>
                        There will be no foolish wand-waving or silly incantations in this class. 
                        As such, I don't expect many of you to appreciate the subtle science and 
                        exact art that is potion-making. However, for those select few who possess 
                        the predisposition, I can teach you how to bewitch the mind and ensnare the senses. 
                        I can tell you how to bottle fame, brew glory, and even put a stopper in death. 
                        Then again, maybe some of you have come to Hogwarts in possession of abilities so 
                        formidable that you feel confident enough to not pay attention!
                    </p>
                    <p>
                        Don’t let the Muggles get you down.
                    </p>
                    <p>
                        He knew one thing only, and it was beyond fear or reason: He was not going to 
                        die crouching here like a child playing hide-and-seek; he was not going to die 
                        kneeling at Voldemort’s feet . . . he was going to die upright like his father, 
                        and he was going to die trying to defend himself, even if no defense was possible.” 
                        There’s like a nice poetic element to this passage I love but didn’t really appreciate 
                        until listening to the audiobooks.
                    </p>
                </article>

                <img src={KFrede} alt="#" />
                <article></article>
            

        </Grid>
            </AboutStyled>
    )
}