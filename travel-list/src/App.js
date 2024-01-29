import { useState } from "react";
import "./index.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import List from "./components/List";
import Stats from "./components/Stats";
function App() {
  const [items, setitems] = useState([]);
  function handleitems(item) {
    setitems((items) => [...items, item]);
  }
  function handledelete(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }
  function handletoogle(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleclearlist() {
    const confirmaa = window.confirm(
      "are you sure you want to delete all the items"
    );
    if (confirmaa) setitems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form additems={handleitems} />
      <List
        items={items}
        handledelete={handledelete}
        handletoogle={handletoogle}
        handleclearlist={handleclearlist}
      />
      <Stats items={items} />
    </div>
  );
}
export default App;
