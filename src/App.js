import React from 'react';
import { GlobalStyle } from './Components/style/style';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Components/Layout/Layout';
import { Main } from './pages/Main';
import { Contacts } from './pages/Contacts';



function App() {


  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>} />
          <Route path="contacts" element={<Contacts/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;





/*const [listTogle, setListTogle] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = (e) => {
    e.preventDefault();

    const data = { name, phone };

    fetch("http://localhost:3001/contacts/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    
    listTogle ? setListTogle(false) : setListTogle(true);
  };

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("http://localhost:3001/contacts/");
      const json = await res.json();
      console.log(json);
    }
    dataFetch();
  }, [listTogle]);*/
