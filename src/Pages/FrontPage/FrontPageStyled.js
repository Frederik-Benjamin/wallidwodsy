import styled from "styled-components";
export const FrontPageStyled = styled.div`
display: flex;
flex-direction: column;

padding: 0;
margin: 0;

.OfferOfMonth {
    display: flex;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    gap: 2rem;
    width: 100%;
    padding: 10px;
    background-color:rgb(193, 129, 10);

    .DisneyOffer {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1 1 50%;
        background-color:rgb(9, 8, 8);
        border: 5px solid rgb(237, 187, 87);
        align-items: center;
        justify-content: center;


        h3 {
            font-size: clamp(12px, 2vw, 40px);
            color: white;
            font-weight: 200;   
            text-align: center;
            width: 350px;

            p {
                margin: 0;
                padding: 3px;
            }

            span {
                font-size: clamp(40px, 3vw, 60px);
            }
        }
    }

    .disneyImage {
        width: 50%;
        display: flex;
        flex: 1 1 50%;
    }
}


@media (max-width: 1200px) {
    .OfferOfMonth {
        flex-direction: column;
        background-color: white;
        gap: 0;
        margin: 0;
        padding: 0;

        .DisneyOffer {
            order: 2; 
            width: 100%;
            align-items: center;
            justify-content: center;
            padding-bottom: 10px;
            
            h3 {
                position: static;
                transform: none;
                text-align: center;
                display: flex;
                justify-content: center;
                white-space: nowrap;
                font-size: clamp(25px, 3vw, 40px);
                
                p {
                padding: 10px;
                }
                
                span {
                    font-size: clamp(30px, 3vw, 40px);
                }
            }

        }   

        .disneyImage {
            width: 100%;
            object-fit: cover;
            order: 1; 
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 10px;
            padding-bottom: 10px;
            flex: 1 1 90%;
            order: 1; 
            background-color:rgb(211, 131, 19);
            padding: 5px;
        }
    }
}
    .BuyNow {
        background-color:rgb(241, 166, 3); /* Changed to orange tone */
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #cc8400; /* Darker orange tone for hover */
        }
    }
`