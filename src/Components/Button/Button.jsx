// Knap komponent
export const ButtonComponent = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
};
