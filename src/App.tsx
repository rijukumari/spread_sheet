import Toolbar from "./components/Toolbar";
import Spreadsheet from "./components/SpreadSheet";

function App() {
  return (
    <div className="p-6 font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">Intern Spreadsheet</h1>
      <Toolbar />
      <Spreadsheet />
    </div>
  );
}

export default App;
