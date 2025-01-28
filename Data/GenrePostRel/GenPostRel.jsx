import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../../src/Utils/supabaseClient";

// Opretter GenreRelContext
const GenreRelContext = createContext();

// GenreRelProvider komponent
const GenreRelProvider = ({ children }) => {
    const [genreRelation, setGenreRelation] = useState([]);

    // Henter data fra supabase
    const getData = async () => {
        const { data, error } = await supabase
            .from('genre_poster_rel')
            .select('*');
        if (!error) {
            setGenreRelation(data);
        }
    };

    // Henter data ved komponent mount
    useEffect(() => {
        getData();
    }, []);

    // Returnerer GenreRelContext.Provider
    return (
        <GenreRelContext.Provider value={{ genreRelation, setGenreRelation }}>
            {children}
        </GenreRelContext.Provider>
    );
};

// Custom hook til at bruge GenreRelContext
const useGenreRel = () => useContext(GenreRelContext);

export { GenreRelProvider, useGenreRel };