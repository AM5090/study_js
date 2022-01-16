import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTogleAction, openAddAction } from '../../redux/action/action';
import { ModalWrapper,
        Modal,
        ModalTitle,
        ModalClose,
        Form,
        ModalInput,
        ModalInputButton } from '../UI/ui';

export const AddModal = () => {

    const toggle = useSelector(state => {
        const { toggleReducer } = state;
        return toggleReducer.toggle;
    });

    const addDispatch = useDispatch();
    const toggleDispatch = useDispatch();
    const [name, setAddName] = useState('');
    const [phone, setAddPhone] = useState('');
    const noPhone = 'Empty contact, click edit to add a contact';

    const handlerName = (event) => {
        const text = event.target.value;
        const replaceName = text.replace(/\W/g, '');
        setAddName(replaceName);
    };

    const handlerPhone = (event) => {
        const text = event.target.value;
        const replacePhone = text.replace(/[^+\d]/g, '');
        setAddPhone(replacePhone);
    };

    const addModalClose = () => {
        addDispatch(openAddAction(null));
    };

    const addContact = (event) => {
        event.preventDefault();

        let addObj;

        if (phone === '') {
            const phone = noPhone;
            addObj = { name, phone };
        } else {
            addObj = { name, phone };
        }

        const addCont = addObj;
        
        //const addCont = { name, phone };

        fetch("http://localhost:3001/contacts/",
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(addCont)
            });

        toggle ? toggleDispatch(listTogleAction(false)) : toggleDispatch(listTogleAction(true));
        
        setAddName('');
        setAddPhone('');

    };

    return (
        <ModalWrapper>
            <Modal>
                <ModalTitle>Add a new contact</ModalTitle>
                <ModalClose onClick={addModalClose}>Close</ModalClose>
                <Form onSubmit={addContact}>
                    <ModalInput type="text"
                        name="name"
                        onChange={handlerName}
                        value={name}/>
                    <ModalInput type="text"
                        name="phone"
                        onChange={handlerPhone}
                        value={phone}/>
                    <ModalInputButton type="submit"
                        bgColor="#003366"
                        disabled={name !== '' ? false : true}>
                            Add contact
                    </ModalInputButton>
                </Form>
            </Modal>
        </ModalWrapper>
    );
};