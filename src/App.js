import './App.css';
import { Header } from './Components/Header/Header';
import { ListWrapper } from './Components/List/ListWrapper';
import { useOpenItem } from './Components/Hooks/useOpenItem';


function App() {

  const openItem = useOpenItem();
  
  return (
    <>
      <Header/>
      <ListWrapper {...openItem} />
    </>
  );
}

export default App;
