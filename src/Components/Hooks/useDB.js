import { useEffect, useState } from "react";
import { ref, onValue } from 'firebase/database';

export const useDB = database => {
    const [db, setdb] = useState(null);

    useEffect(() => {
        const dbRef = ref(database, 'goods');
        onValue(dbRef, snapshot => {
            setdb(snapshot.val());
        })
    }, [database])

    return db;
}