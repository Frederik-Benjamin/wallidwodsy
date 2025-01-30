// Knap komponent
export const ButtonComponent = ({ text, buttonSvg, onClick }) => {
    return (
        <button onClick={onClick}>
            {text}
            {buttonSvg && <img src={buttonSvg} alt="button icon" />}
        </button>
    );
};
