import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../../src/Utils/supabaseClient";

const PosterContext = createContext();

const PosterProvider = ({ children }) => {
    const [posterList, setPosterList] = useState([]);
    const [featuredPoster, setFeaturedPoster] = useState([]);

    const getData = async () => {
        const { data, error } = await supabase
            .from('posters')
            .select('*');
        if (!error) {
            setPosterList(data);
            setRandomFeaturedPosters(data);
        } else {
            console.error('Error fetching data:', error);
        }
    };

    const setRandomFeaturedPosters = (data) => {
        const shuffled = data
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        setFeaturedPoster(shuffled.slice(0, 6));
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (featuredPoster.length > 0) {
            console.log('Featured posters:', featuredPoster);
        }
    }, [featuredPoster]);

    return (
        <PosterContext.Provider value={{ posterList, featuredPoster }}>
            {children}
        </PosterContext.Provider>
    );
};

const usePoster = () => {
    return useContext(PosterContext);
};

export { PosterProvider, usePoster };