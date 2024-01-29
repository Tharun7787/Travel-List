export default function Item({ itemobj, handledelete, handletoogle }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={itemobj.packed}
          onChange={() => handletoogle(itemobj.id)}
        />
        <span style={itemobj.packed ? { textDecoration: "line-through" } : {}}>
          {itemobj.quant} {itemobj.desc}
        </span>
        <button onClick={() => handledelete(itemobj.id)}>❌</button>
      </li>
    </div>
  );
}
