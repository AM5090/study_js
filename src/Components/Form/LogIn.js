import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { checkEmail, openRegToggle } from '../../redux/authSlice';
import {ModalForm, FormItem, FormItemName, FormInput, InputError, ModalFooterWrapper, ModalButton, ModalFooter, ModalFooterItem, FooterItemName} from '../../ui/ui';

export const LogIn = ({ users }) => {

    const mailAuth = useSelector(state => state.auth.mailAuth);
    const openReg = useSelector(state => state.auth.openReg);

    const dispatch = useDispatch();

    const [mailValue, setMailValue] = useState('');
    const [passValue, setPassValue] = useState('');
    
    const handlerMail = (event) => {
        const text = event.target.value;
        setMailValue(text);
    };

    const handlerPass = (event) => {
        const pass = event.target.value;
        setPassValue(pass);
    };

    const userCheck = (event) => {
        event.preventDefault();

        const searchUser = users.find(item => item.mail === mailValue);

        if(searchUser) {
            dispatch(checkEmail({mailAuth: true}));
        } else {
            dispatch(checkEmail({mailAuth: false}));
            dispatch(openRegToggle({openReg: true}));
        }
    };


    return (
        <ModalForm onSubmit={userCheck}>
            <FormItem>
                <FormItemName>Email</FormItemName>
                <FormInput onChange={handlerMail} value={mailValue} placeholder='Email' required/>
            </FormItem>
            {mailAuth &&
                <FormItem>
                    <FormItemName>Пароль</FormItemName>
                    <FormInput onChange={handlerPass} value={passValue} placeholder='Пароль' required/>
                </FormItem>
            }
            {!mailAuth ? 
                <ModalButton type='submit'>Продолжить</ModalButton> :
                <ModalButton type='submit'>Войти</ModalButton>
            }
            {mailAuth ? 
            <ModalFooterWrapper>
                <FooterItemName>Забыли пароль?</FooterItemName> 
            </ModalFooterWrapper> :
            <ModalFooterWrapper>
                <FormItemName>Или</FormItemName>
                <ModalFooter>
                    <ModalFooterItem><i className="fa fa-google" aria-hidden="true"></i></ModalFooterItem>
                    <ModalFooterItem><i className="fa fa-apple" aria-hidden="true"></i></ModalFooterItem>
                    <ModalFooterItem><i className="fa fa-vk" aria-hidden="true"></i></ModalFooterItem>
                    <ModalFooterItem><i className="fa fa-facebook" aria-hidden="true"></i></ModalFooterItem>
                </ModalFooter>
            </ModalFooterWrapper>}
        </ModalForm>
    );
};