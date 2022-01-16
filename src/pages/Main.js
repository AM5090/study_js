import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInAction } from "../redux/action/action";
import styled from "styled-components";
import { ModalInputButton } from '../Components/UI/ui';

const WindowWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    padding-top: 70px;
`;

const Window = styled.div`
    width: 400px;
    border: 1px solid #0000001f;
    border-radius: 5px;
    padding: 20px 40px;
    box-shadow: 3px 5px 6px 0px #00000033;
`;

const WindowTitle = styled.p`
    margin-bottom: 20px;
    color: #2f3540;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const WindowInputWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 28px;
`;

const WindowInput = styled.input`
    width: 100%;
    font-size: 16px;
    padding: 6px;
    margin-bottom: 12px;
    border: 1px solid #0000001f;
    border-radius: 5px;
    &:focus-visible {
        outline: 1px solid #308d1e;
    }
`;

const WindowInputError = styled.span`
    position: absolute;
    left: 0px;
    bottom: -8px;
    font-size: 12px;
    color: #b50000;
`;

const WindowInputSuccess = styled.span`
    position: absolute;
    left: 0px;
    bottom: -8px;
    font-size: 12px;
    color: green;
`;


export const Main = () => {

    const logIn = useSelector(state => {
        const { logInReducer } = state;
        return logInReducer.logInResult;
    });

    const dispatch = useDispatch();
    const [inName, setInName] = useState('');
    const [inPass, setInPass] = useState('');

    const handlerInName = (event) => {
        const text = event.target.value;
        const replaceInName = text.replace(/\W/g, '');
        setInName(replaceInName);
    };

    const handlerInPass = (event) => {
        const text = event.target.value;
        const replaceInPass = text.replace(/\W/g, '');
        setInPass(replaceInPass);
    };
    
    const LogIn = event => {
        event.preventDefault();

        const getUser = async () => {
            const res = await fetch('http://localhost:3001/users');
            const json = await res.json();

            json.forEach((item) => {
                if (item.name === inName && item.password === inPass) {
                    dispatch(logInAction(true));
                    setInName('');
                    setInPass('');
                } else {
                    dispatch(logInAction(false));
                }
            });
        };
        getUser();
    };

    return (
        <>
            <h2>LogIn</h2>
            <WindowWrapper>
                <Window>
                    <WindowTitle>Enter your username and password</WindowTitle>
                    <Form onSubmit={LogIn}>
                        <WindowInputWrapper>
                            <WindowInput type="text"
                                name="name"
                                placeholder="Your name" 
                                onChange={handlerInName} 
                                value={inName}/>
                            <WindowInput type="password"
                                name="password"
                                placeholder="Your password" 
                                onChange={handlerInPass} 
                                value={inPass}/>
                            {logIn === false && <WindowInputError>Username or password entered incorrectly</WindowInputError>}
                            {logIn && <WindowInputSuccess>Welcome</WindowInputSuccess>}
                        </WindowInputWrapper>
                        <ModalInputButton type="submit" bgColor="#003366">Log in</ModalInputButton>
                    </Form>
                </Window>
            </WindowWrapper>
        </>
    );
};