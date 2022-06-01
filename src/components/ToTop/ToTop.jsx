export default function ToTop() {
  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return;
  }
  return (
    <button onClick={toTop} className="to-top">
      <div>
        <h2>Jump to top</h2>
      </div>
      <span>☝️</span>
    </button>
  );
}
