import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useDB } from './Components/Hooks/useDB';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyA75Va2Q7ww58DlEBB-jg9TpzWpUAOH0NM",
  authDomain: "mrdonalds-f1136.firebaseapp.com",
  databaseURL: "https://mrdonalds-f1136-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-f1136",
  storageBucket: "mrdonalds-f1136.appspot.com",
  messagingSenderId: "517220229019",
  appId: "1:517220229019:web:dec49aeb2e1b7838dd8b3e"
};

initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(getAuth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const database = getDatabase();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);
  const dbMenu = useDB(database);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      dbMenu,
      database
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu/>
      { openItem.openItem && <ModalItem/> }
      {orderConfirm.openOrderConfirm && <OrderConfirm/>}
    </Context.Provider>
  );
}

export default App;
