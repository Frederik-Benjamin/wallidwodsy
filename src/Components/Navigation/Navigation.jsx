import { NavLink } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

import basket from "../../Assets/Images/basket.svg";

export const Navigation = () => {
    return (
        <NavigationStyled>


            <div>
                <h1><NavLink to="/">Wallywood</NavLink></h1>

                <ul>
                    <li> <NavLink to="/">Forside</NavLink> </li>
                    <li> <NavLink to="Posters">Plakater</NavLink> </li>
                    <li> <NavLink to="About">Om Os</NavLink> </li>
                    <li> <NavLink to="Contact">Kontakt Os</NavLink> </li>
                    <li> <NavLink to="LogIn">Log Ind</NavLink> </li>

                    <li><img className="basketImage" src={basket} alt="Kurv" /></li> {/*Kurv (modal)*/}
                </ul>

                <span className="spaceLine"></span>
            </div>

            </div>

        </NavigationStyled>
    )
}