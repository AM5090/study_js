import React from "react";
import { useGetList } from "../../Hooks/useGetList";
import { ContactsList } from "./ContactsList";

export const ContactsRender = () => {

    const requestResult = useGetList();
    const succses = requestResult.response;

    return (
        <>
            {succses ?
                <ContactsList list={succses}/> :
                <p>Failed</p>
            }
        </>
    );
};