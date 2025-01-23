import { useEffect, useState } from "react";
import supabase from "../../Utils/Data/supabaseClient";

export const GenreList = () => {
    const [genreData, setGenreData] = useState([]);

    const getData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from('genre')
                .select('*');
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setGenreData(data);
            }
        }
    }

    useEffect(() => {
        getData();
    }, [setGenreData, supabase]);

    return (
        <ul>
            {genreData
                && genreData.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
        </ul>
    );

}