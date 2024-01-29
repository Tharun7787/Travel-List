import { useState } from "react";
import Item from "./Item";

export default function List({
  items,
  handledelete,
  handletoogle,
  handleclearlist,
}) {
  const [sort, setsort] = useState("input");
  let sortitems;
  if (sort === "input") sortitems = items;
  if (sort === "description")
    sortitems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  if (sort === "packedstatus")
    sortitems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortitems.map((item) => (
          <Item
            itemobj={item}
            key={item.id}
            handledelete={handledelete}
            handletoogle={handletoogle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setsort(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packedstatus">sort by packed status</option>
        </select>
        <button onClick={handleclearlist}>clear List</button>
      </div>
    </div>
  );
}
