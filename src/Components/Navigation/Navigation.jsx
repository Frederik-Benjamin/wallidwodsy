import { NavigationStyled } from "./NavigationStyled";

export const Navigation = () => {
    return (
        <NavigationStyled>
            <h1>Wallywood</h1>

            <ul>
                <li><NavLink></NavLink></li> {/*Forside*/}
                <li><NavLink></NavLink></li> {/*Plakater*/}
                <li><NavLink></NavLink></li> {/*Om Os*/}
                <li><NavLink></NavLink></li> {/*Kontakt Os*/}
                <li><NavLink></NavLink></li> {/*Log Ind*/}

                <li></li> {/*Kurv (modal)*/}
            </ul>
        </NavigationStyled>
    )
}