import { Calculator, Toggle } from "./components";

const App = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="w-screen h-screen bg-white dark:bg-zinc-600 p-6 flex flex-col items-center gap-10 ">
      <Toggle onChange={toggleTheme} isChecked={true} />
      <Calculator />
    </div>
  );
};

export default App;
