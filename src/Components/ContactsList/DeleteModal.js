import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { listTogleAction, openDeleteAction } from '../../redux/action/action';
import { ModalWrapper,
        Modal,
        ModalTitle,
        ModalInputButton,
        CardTitle,
        CardPhone } from '../UI/ui';

export const DeleteModalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
`;

export const DeleteModal = ({deleteItem}) => {

    const toggle = useSelector(state => {
        const { toggleReducer } = state;
        return toggleReducer.toggle;
    });

    const deleteDispatch = useDispatch();
    const toggleDispatch = useDispatch();
    const deleteId = deleteItem.id;

    const yesDelete = () => {
        fetch(`http://localhost:3001/contacts/${deleteId}`,
        {
            method: "DELETE"
        });

        toggle ? toggleDispatch(listTogleAction(false)) : toggleDispatch(listTogleAction(true));
        deleteDispatch(openDeleteAction(null));
    };

    const noDelete = () => {
        deleteDispatch(openDeleteAction(null));
    };

    return (
        <ModalWrapper>
            <Modal>
                <ModalTitle>Are you sure you want to delete a contact?</ModalTitle>
                <CardTitle>{deleteItem.name}</CardTitle>
                <CardPhone>{deleteItem.phone}</CardPhone>
                <DeleteModalWrapper>
                    <ModalInputButton bgColor="#d72222" onClick={yesDelete}>Yes</ModalInputButton>
                    <ModalInputButton bgColor="#008000" onClick={noDelete}>No</ModalInputButton>
                </DeleteModalWrapper>
            </Modal>
        </ModalWrapper>
    );
};