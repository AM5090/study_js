import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openAddAction, getUrlAction } from '../../redux/action/action';
import styled from "styled-components";


const PanelWrapper = styled.div`
    display: grid;
    grid-template-columns: 210px 1fr;
    grid-template-rows: 30px;
    grid-gap: 20px;
    margin-bottom: 20px;
`;

const AddButton = styled.button`
    width: 100%;
    font-size: 14px;
    padding: 2px;
    border: ${({bgColor}) => `1px solid ${bgColor}`};
    background-color: ${({bgColor}) => bgColor};
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease-out;
    &:hover{
        background-color: #fff;
        color: ${({bgColor}) => bgColor};
    }
`;

const AddForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 80px;
`;

const SearchInput = styled.input`
    width: 100%;
    font-size: 16px;
    padding: 6px;
    border: 1px solid #003366;
    border-radius: 5px 0 0 5px;
    &:focus-visible {
        outline: none;
    }
`;

const SearchButton = styled.button`
    width: 100%;
    font-size: 14px;
    padding: 2px;
    border: ${({bgColor}) => `1px solid ${bgColor}`};
    background-color: ${({bgColor}) => bgColor};
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: 0.2s ease-out;
    &:hover{
        background-color: #fff;
        color: ${({bgColor}) => bgColor};
    }
`;

export const Panel = () => {
    
    const urlDispatch = useDispatch()
    const addDispatch = useDispatch();
    const [searchParam, setSearchParam] = useState('')

    const addModalOpen = () => {
        addDispatch(openAddAction(true));
    };

    const handlerSearchParam = (event) => {
        const text = event.target.value;
        const replaceSearch = text.replace(/\W/g, '');
        setSearchParam(replaceSearch);
    };

    const searchStart = (event) => {
        event.preventDefault();

        const url = `http://localhost:3001/contacts/?q=${searchParam}`;

        urlDispatch(getUrlAction(url));
    };

    

    return (
        <PanelWrapper>
            <AddButton type="submit" bgColor="#003366" onClick={addModalOpen}>Add contact</AddButton>
            <AddForm onSubmit={searchStart}>
                <SearchInput type="text" name="search" onChange={handlerSearchParam} value={searchParam}/>
                <SearchButton type="submit" bgColor="#003366">Search</SearchButton>
            </AddForm>
        </PanelWrapper>
    );
};