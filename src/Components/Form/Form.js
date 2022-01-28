import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkEmail, openRegToggle, openModal } from '../../redux/authSlice';
import { useGetFetch } from '../../Hooks/useGetFetch';
import { LogIn } from './LogIn';
import { Registration } from './Registration';
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
    display: flex;
    align-items: center;
    color: #000;
    font-size: 20px;
    i {
        font-size: 22px;
        font-weight: 600;
        margin-right: 8px;
    }
    div {
        cursor: pointer;
    }
`;

const ModalClose = styled.div`
    color: #000;
    font-size: 20px;
    cursor: pointer;
`;

export const Form = () => {

    const resData = useGetFetch();
    const users = resData.response;

    const mailAuth = useSelector(state => state.auth.mailAuth);
    const openReg = useSelector(state => state.auth.openReg);

    const dispatch = useDispatch();

    const backLogIn = () => {
        dispatch(checkEmail({mailAuth: false}));
    }

    const handlerModalShow = () => {
        dispatch(openModal({modalShow: false}));
        dispatch(checkEmail({mailAuth: false}));
        dispatch(openRegToggle({openReg: false}));
    }

    return (
        <ModalWrapper>
            <Modal>
                <ModalHeader>
                    {mailAuth ? 
                        <ModalTitle onClick={backLogIn}>
                            <div>
                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                                <span>Вход</span>
                            </div>
                        </ModalTitle> :
                        openReg ? <ModalTitle>Регистрация</ModalTitle> :
                        <ModalTitle>Вход или регистрация</ModalTitle>
                    }
                    <ModalClose onClick={handlerModalShow}><i className="fa fa-times" aria-hidden="true"></i></ModalClose>
                </ModalHeader>
                {!openReg ? 
                    <LogIn users={users}/> :
                    <Registration/>
                }
            </Modal>
        </ModalWrapper>
    );

};