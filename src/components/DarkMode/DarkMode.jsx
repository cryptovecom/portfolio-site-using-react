function darkMode(e) {
  e.preventDefault(); // Added to prevent page reload on click.
  document.querySelector("body").classList.toggle("dark-mode");
}

export const DarkMode = () => {
  return (
    <button className="dark-mode-button" onClick={darkMode}>
      🌙
    </button>
  );
};
