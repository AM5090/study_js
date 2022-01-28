import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../src/redux/authSlice';
import { GlobalStyle } from './style/style';
import { Form } from './Components/Form/Form';
import { MainPage, OpenModal } from '../src/ui/ui';


function App() {

  const modalShow = useSelector(state => state.auth.modalShow);
  const dispatch = useDispatch();

  const handlerModalShow = () => {
    dispatch(openModal({modalShow: true}));
  }

  return (
    <>
      <GlobalStyle/>
      <MainPage>
        <OpenModal onClick={handlerModalShow}>Вход или регистрация</OpenModal>
      </MainPage>
      {modalShow && <Form/>}
    </>
  );
}

export default App;
