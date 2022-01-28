import { useState, useEffect } from "react";

export const useGetFetch = () => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const res = await fetch('http://localhost:3001/users');
                const json = await res.json();
                setResponse(json);
            } catch(err) {
                setError(err);
            }
        };
        dataFetch();
    }, []);
    return { response, error };
};