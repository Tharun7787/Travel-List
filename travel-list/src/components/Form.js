import { useState } from "react";

export default function Form({ additems }) {
  const [desc, setdesc] = useState("");
  const [quant, setquant] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;

    let listitem = { desc, quant, packed: false, id: Date.now() };
    additems(listitem);
    setdesc("");
    setquant(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <p>what would you 😍 to add</p>
      <select
        value={quant}
        onChange={(e) => {
          setquant(Number(e.target.value));
        }}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
      <input
        type="text"
        placeholder="Add item..."
        value={desc}
        onChange={(e) => {
          setdesc(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
