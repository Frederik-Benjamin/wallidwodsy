import { FooterStyled } from "./FooterStyled";

export const Footer = () => {
    return (
        <FooterStyled>
            
            <div className="InfoFooter">
                <ul>
                    <h1>Wallywood<span>'sy</span></h1>
                    <p>Øster Uttrupvej 1</p>
                    <p>9000 Aalborg</p>
                </ul>

                <ul>
                    <p>CVR: 12345678</p>
                    <p>Mail: info@info.dk</p>
                    <p>Mobil: +45 0032 3431</p>
                </ul>
            </div>

            <div>
                <icon>P</icon>
                <icon>I</icon>
                <icon>F</icon>
                <icon>T</icon>
            </div>
        </FooterStyled>
    )
}