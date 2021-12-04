import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut  } from "firebase/auth";

export function useAuth(authFirebase) {
    const [authentication, setAuthentication] = useState(null);

    const auth = authFirebase();
    const provider = new GoogleAuthProvider();

    const logIn = () => signInWithPopup(auth, provider);

    const logOut = () => signOut(auth)
        .catch(err => console.error());

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setAuthentication(user);
            } else {
                setAuthentication(null);
            }
        });
    }, [auth, authentication]);

    return { authentication, logIn, logOut };

}