import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../../src/Utils/supabaseClient";

const GenreRelContext = createContext();

const GenreRelProvider = ({ children }) => {

    const [GenreRelation, setgenreRelation] = useState([])

    const getData = async () => {
        if(supabase) {
            const { data, error } = await supabase 
            .from('genre_poster_rel')
            .select('*');

            if (error) {
                console.log();
            } 
            else {
                setgenreRelation(data);
            }
        }
    };

    useEffect(() => {
        getData();
        console.log(GenreRelation);
        
    }, []);

    return (
        <GenreRelContext.Provider value={{ GenreRelation, setgenreRelation}}>
            {children}
        </GenreRelContext.Provider>
    );

};

const useGenreRel = () => useContext(GenreRelContext);

export { GenreRelProvider, useGenreRel};