export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding Things to your List 📃</em>
      </footer>
    );
  }
  const notpacked = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percent = Math.round((packed / notpacked) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "you are set to Goo!✈️"
          : `you have ${notpacked} things on our list and you already packed 
        ${packed} (${percent} %)`}
      </em>
    </footer>
  );
}
