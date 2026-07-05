import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={
        theme === "dark"
          ? "bg-gray-900 text-white p-4"
          : "bg-white text-black p-4"
      }
    >
      <p>Current theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="bg-blue-600 text-white px-3 py-1 rounded mt-2"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
