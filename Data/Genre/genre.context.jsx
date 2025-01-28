import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../../src/Utils/supabaseClient";

// Opretter GenreContext
const GenreContext = createContext();

// GenreProvider komponent
const GenreProvider = ({ children }) => {
    const [genreList, setGenreList] = useState([]);

    // Henter data fra supabase
    const getData = async () => {
        const { data, error } = await supabase
            .from('genres')
            .select('*');
        if (!error) {
            setGenreList(data);
        }
    };

    // Henter data ved komponent mount
    useEffect(() => {
        getData();
    }, []);

    // Returnerer GenreContext.Provider
    return (
        <GenreContext.Provider value={{ genreList, setGenreList }}>
            {children}
        </GenreContext.Provider>
    );
};

// Custom hook til at bruge GenreContext
const useGenre = () => useContext(GenreContext);

export { GenreProvider, useGenre };