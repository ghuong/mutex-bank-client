import BankBalance from "./components/BankBalance";

function App() {
  return (
    <div className="App">
      <BankBalance balance={500} />
      <BankBalance balance={500} />
    </div>
  );
}

export default App;
