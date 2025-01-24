import { createContext, useContext, useEffect, useState } from "react";
import supabase from "./supabaseClient";

const PosterContext = createContext();

const PosterProvider = ({ children }) => {
    const [posterList, setPosterList] = useState([]);

    const getData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from('posters')
                .select('*');
            console.log('Fetching data...');
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                console.log('Data fetched:', data);
                setPosterList(data);
            }
        }
    };

    useEffect(() => {
        getData();
    }, []); // Only run once on mount

    useEffect(() => {
        console.log('Poster list updated:', posterList);
    }, [posterList]); // Log when posterList changes

    return (
        <PosterContext.Provider value={{ posterList, setPosterList }}>
            {children}
        </PosterContext.Provider>
    );
};

const usePoster = () => useContext(PosterContext);

export { PosterProvider, usePoster };