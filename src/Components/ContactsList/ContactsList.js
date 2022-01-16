import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { openEditAction, openDeleteAction } from '../../redux/action/action';
import { Panel } from './Panel';
import { AddModal } from './AddModal';
import { EditModal } from './EditModal';
import { DeleteModal } from './DeleteModal';
import { CardTitle, CardPhone } from '../UI/ui';


const ContactCardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`;

const ContactCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 95px;
    border: 1px solid #0000001f;
    box-shadow: 3px 5px 6px 0px #00000012;
    padding: 10px 20px;
    border-radius: 5px;
    transition: 0.2s ease-out;
    &:hover{
        box-shadow: 3px 5px 6px 0px #00000033;
    }
`;

const CardButtons = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    grid-gap: 10px;
`;

const CardButton = styled.div`
    font-size: 12px;
    color: ${({ color }) => color};
    cursor: pointer;
`;

export const ContactsList = ({ list }) => {

    const openAdd = useSelector(state => {
        const { openAddReducer } = state;
        return openAddReducer.openAdd;
    })

    const openEdit = useSelector(state => {
        const { openEditReducer } = state;
        return openEditReducer.openEdit;
    });

    const openDelete = useSelector(state => {
        const { openDeleteReducer } = state;
        return openDeleteReducer.openDelete;
    });

    const editDispatch = useDispatch();
    const deleteDispatch = useDispatch();

    const [itemToModal, setItemToModal] = useState({});

    const editModalOpen = (item) => {
        editDispatch(openEditAction(true));
        setItemToModal(item);
    };

    const deleteModalOpen = (item) => {
        deleteDispatch(openDeleteAction(true));
        setItemToModal(item);
    }

    return (
        <>
            <Panel/>
            <ContactCardWrapper>
                {list.length ? 
                    list.map(item => (
                        <ContactCard key={item.id}>
                            <div>
                                <CardTitle>{item.name}</CardTitle>
                                <CardPhone>{item.phone}</CardPhone>
                            </div>
                            <CardButtons>
                                <CardButton color="#008000" onClick={() => editModalOpen(item)}>Edit</CardButton>
                                <CardButton color="#d72222" onClick={() => deleteModalOpen(item)}>Delete</CardButton>
                            </CardButtons>
                        </ContactCard>
                    )) : 
                    <p>The list is empty</p>
                }
            </ContactCardWrapper>
            {openEdit && <EditModal editItem={itemToModal}/>}
            {openDelete && <DeleteModal deleteItem={itemToModal}/>}
            {openAdd && <AddModal/>}
        </>
    );
};