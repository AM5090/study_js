import React from "react";
import { useSelector } from "react-redux";
import { ContactsRender } from "../Components/ContactsList/ContactsRender";

export const Contacts = () => {

    const showList = useSelector(state => {
        const { logInReducer } = state;
        return logInReducer.logInResult;
    });
   
    return (
        <>
            <h2>Contacts</h2>
            {showList ? 
                <ContactsRender/> :
                <p>Log in to view your contacts</p>
            }
        </>
    );
};