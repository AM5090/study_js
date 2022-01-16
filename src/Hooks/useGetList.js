import { useState, useEffect } from "react";
import { useSelector } from "react-redux";



export const useGetList = () => {

    const toggle = useSelector(state => {
        const { toggleReducer } = state;
        return toggleReducer.toggle;
    });

    const url = useSelector(state => {
        const { getUrlReducer } = state;
        return getUrlReducer.getUrl;
    });

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const dataFetch = async() => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResponse(json);
            } catch (err) {
                console.error(err);
                setError(err);
            }
        };
        dataFetch();
    }, [toggle, url]);

    return { response, error };

}

