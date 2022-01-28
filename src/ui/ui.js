import styled from 'styled-components';

export const MainPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const OpenModal = styled.div`
    display: inline-block;
    font-size: 18px;
    padding: 8px 12px;
    border: 2px solid #000;
    color: #000;
    cursor: pointer;
`;

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 20px;
`;

export const FormItem = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 16px;
`;

export const FormItemName = styled.p`
    font-size: 14px;
    color: #3f4346;
    margin: 0 0 5px 0;
`;

export const FormInput = styled.input`
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

export const InputError = styled.p`
    font-size: 12px;
    color: red;
    margin: 0;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const ModalButton = styled.button`
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

export const ModalFooterWrapper = styled.div`
    width: 100%;
    padding-top: 20px;
    text-align: center;
`;

export const ModalFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 15px 0 15px;
`;

export const ModalFooterItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    width: 42px;
    height: 42px;
    border: 1px solid #e8ecf5;
    border-radius: 50%;
    cursor: pointer;
    .fa-google {
        color: #5776d0;
    }
    .fa-vk {
        color: #1484f8;
    }
    .fa-facebook {
        color: #1b7ae6;
    }
`;

export const FooterItemName = styled.p`
    font-size: 15px;
    font-weight: 600;
    color: #5e639b;
    margin: 5px 0 10px 0;
    cursor: pointer;
`;

export const RegistrationName = styled.p`
    text-align: left;
    font-size: 12px;
    color: #3f4346;
    margin: 0 0 10px 0;
    line-height: 1.4;
    span {
        color: #5e639b;
        cursor: pointer;
    }
`;