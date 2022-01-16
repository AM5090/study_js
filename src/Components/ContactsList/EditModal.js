import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTogleAction, openEditAction } from '../../redux/action/action';
import { ModalWrapper,
        Modal,
        ModalTitle,
        ModalClose,
        Form,
        ModalInput,
        ModalInputButton } from '../UI/ui';


export const EditModal = ({editItem}) => {

    const toggle = useSelector(state => {
        const { toggleReducer } = state;
        return toggleReducer.toggle;
    });

    const toggleDispatch = useDispatch();
    const editDispatch = useDispatch();
    const [name, setNewName] = useState(editItem.name);
    const [phone, setNewPhone] = useState(editItem.phone);
    const editId = editItem.id;

    const editModalClose = () => {
        editDispatch(openEditAction(null));
    };

    const handlerNewName = (event) => {
        const text = event.target.value;
        const replaceNewName = text.replace(/\W/g, '');
        setNewName(replaceNewName);
    };

    const handlerNewPhone = (event) => {
        const text = event.target.value;
        const replaceNewPhone = text.replace(/[^+\d]/g, '');
        setNewPhone(replaceNewPhone);
    };

    const editContact = (event) => {
        event.preventDefault();

        const newDate = { name, phone };
    
        fetch(`http://localhost:3001/contacts/${editId}`,
        {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newDate)
        });

        toggle ? toggleDispatch(listTogleAction(false)) : toggleDispatch(listTogleAction(true));
        editModalClose();
    };

    return (
        <ModalWrapper>
            <Modal>
                <ModalTitle>Edit a contact</ModalTitle>
                <ModalClose onClick={editModalClose}>Close</ModalClose>
                <Form onSubmit={editContact}>
                    <ModalInput type="text"
                        name="name"
                        onChange={handlerNewName}
                        value={name}/>
                    <ModalInput type="text"
                        name="phone"
                        onChange={handlerNewPhone}
                        value={phone}/>
                    <ModalInputButton type="submit" bgColor="#003366">Edit</ModalInputButton>
                </Form>
            </Modal>
        </ModalWrapper>
    );
};