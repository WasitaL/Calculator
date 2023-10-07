import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-white dark:bg-black p-4">
      <button
        className="text-white bg-black rounded-xl py-2 px-4  hover:bg-gray dark:bg-white dark:text-black"
        onClick={toggleTheme}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default App;
