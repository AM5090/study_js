import React, { useState } from 'react';
import {ModalForm, FormItem, FormItemName, FormInput, InputError, ModalButton, ModalFooterWrapper, ModalFooter, RegistrationName} from '../../ui/ui';


export const Registration = () => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');


    const addUser = (event) => {
        event.preventDefault();

        const newContact = { mail, password, name, phone };

        fetch("http://localhost:3001/users/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact)
        });

        setMail('');
        setPassword('');
        setName('');
        setPhone('');
    }

    return (
        <ModalForm onSubmit={addUser}>
            <FormItem>
                <FormItemName>Email</FormItemName>
                <FormInput onChange={e => setMail(e.target.value)} value={mail} placeholder='Email' required/>
            </FormItem>
            <FormItem>
                <FormItemName>Пароль</FormItemName>
                <FormInput onChange={e => setPassword(e.target.value)} value={password} placeholder='Пароль' required/>
            </FormItem>
            <FormItem>
                <FormItemName>Имя Фамилия</FormItemName>
                <FormInput onChange={e => setName(e.target.value)} value={name} placeholder='Имя Фамилия' required/>
            </FormItem>
            <FormItem>
                <FormItemName>Телефон</FormItemName>
                <FormInput onChange={e => setPhone(e.target.value)} value={phone} placeholder='Телефон' required/>
            </FormItem>
            <ModalButton type='submit'>Создать аккаунт</ModalButton>
            <ModalFooterWrapper>
                <RegistrationName>
                    Нажимая на "Создать аккаунт", вы соглашаетесь
                    с <span>Политикой обработки данных</span>
                </RegistrationName>
            </ModalFooterWrapper>
        </ModalForm>
    );
};