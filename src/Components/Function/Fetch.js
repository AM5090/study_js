import { useEffect, useState} from "react";

export const Fetches = () => {

    const [response, setResponse] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async() => {
            try {
                const json = await fetch('https://yts.mx/api/v2/list_movies.json');
                const res = await json.json();
                setResponse(res);
            } catch(err) {
                setError(err);
            }
        };
        fetchData();
    }, []);

    return { response, error };
}