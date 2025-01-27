import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../../src/Utils/supabaseClient";

const GenreContext = createContext();

const GenreProvider = ({ children }) => {
    const [genreList, setGenreList] = useState([]);

    const getData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from('genres')
                .select('*');
            console.log('Fetching data...');
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                console.log('Data fetched:', data);
                setGenreList(data);
            }
        }
    };

    useEffect(() => {
        getData();
        console.log(genreList);
        
    }, [children, supabase]); // Only run once on mount

    

    return (
        <GenreContext.Provider value={{ genreList, setGenreList }}>
            {children}
        </GenreContext.Provider>
    );
}

const useGenre = () => useContext(GenreContext);

export { GenreProvider, useGenre };