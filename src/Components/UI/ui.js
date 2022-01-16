import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Modal = styled.div`
    position: relative;
    width: 400px;
    border: 1px solid #0000001f;
    border-radius: 5px;
    padding: 20px 40px;
    box-shadow: 0px 0px 14px 4px #0000004d;
    background-color: #fff;
`;

export const ModalTitle = styled.p`
    margin-bottom: 20px;
    color: #2f3540;
`;

export const ModalClose = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 12px;
    color: #d72222;
    cursor: pointer;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const ModalInput = styled.input`
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

export const ModalInputButton = styled.button`
    width: 100%;
    font-size: 14px;
    padding: 10px;
    border: ${({bgColor}) => `1px solid ${bgColor}`};
    background-color: ${({bgColor}) => bgColor};
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease-out;
    &:hover{
        //background-color: ${({bgColor}) => bgColor + 'd6'};//'#0d569f'
        background-color: #fff;
        //box-shadow: ${({bgColor}) => `inset 0 0 0 0 ${bgColor}d6`};
        color: ${({bgColor}) => bgColor};
    }
    &:disabled{
        border: 1px solid #ccc;
        background-color: #ccc;
        color: #000;
    }
`;

export const CardTitle = styled.p`
    font-size: 20px;
    margin-bottom: 6px;
    color: #2f3540;
`;

export const CardPhone = styled.p`
    font-size: 16px;
    padding-left: 15px;
    margin-bottom: 12px;
    color: #575d68;
`;