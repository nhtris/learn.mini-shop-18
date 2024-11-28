import "./App.css";
import Routing from "./Routing";

function App() {
  const darkMode = false;
  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="dark:bg-neutral-500">
        <Routing />
      </div>
    </div>
  );
}

export default App;
