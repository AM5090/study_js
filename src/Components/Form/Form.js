import React, { useState } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1d41832e;
`;

const Modal = styled.div`
    width: 400px;
    background-color: #fff;
    border-radius: 20px;
`;

const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid #cccccc75;
`;

const ModalTitle = styled.div`
    color: #000;
    font-size: 20px;
`;

const ModalClose = styled.div`
    color: #000;
`;

const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 20px;
`;

const FormItem = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 16px;
`;

const FormItemName = styled.p`
    font-size: 14px;
    color: #3f4346;
    margin: 0 0 5px 0;
`;

const FormInput = styled.input`
    width: 100%;
    font-size: 18px;
    padding: 8px 12px;
    background-color: #e8ecf5;
    border-radius: 4px;
    border: 1px solid #e8ecf5;
    color: #9296a1;
    &:focus-visible{
        outline: 1px solid transparent;
        background-color: #fff;
    }
`;

const InputError = styled.p`
    font-size: 12px;
    color: red;
    margin: 0;
    position: absolute;
    bottom: 0;
    left: 0;
`;

const ModalButton = styled.button`
    background: linear-gradient(to right, #6174d8,#8d76d8);
    border: none;
    color: #fff;
    padding: 10px;
    width: 100%;
    border-radius: 18px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
`;

export const Form = () => {

    const [ mailValue, setMailValue ] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handlerMail = (event) => {
        const text = event.target.value;
        setMailValue(text);
    };

    const userCheck = (event) => {
        event.preventDefault();

        const dataFetch = async () => {
            try {
                const res = await fetch('http://localhost:3001/users');
                const json = await res.json();
                setResponse(json);
                console.log(json);
            } catch(err) {
                console.error(err);
                setError(err);
            }
        };
        dataFetch();
        
    };

    console.log(response);


    return (
        <ModalWrapper>
            <Modal>
                <ModalHeader>
                    <ModalTitle>Вход или регистрация</ModalTitle>
                    <ModalClose>X</ModalClose>
                </ModalHeader>
                <ModalForm onSubmit={userCheck}>
                    <FormItem>
                        <FormItemName>Email</FormItemName>
                        <FormInput onChange={handlerMail} value={mailValue} placeholder='Email' required/>
                        <InputError>Error message</InputError>
                    </FormItem>
                    <ModalButton type='submit'>Продолжить</ModalButton>
                </ModalForm>
            </Modal>
        </ModalWrapper>
    );

};