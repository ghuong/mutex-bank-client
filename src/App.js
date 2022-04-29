import AccountDisplay from "./components/AccountDisplay";

function App() {
  return (
    <div className="App">
      <AccountDisplay accountName="With Mutex" startingBalance={500} />
      <AccountDisplay accountName="Without Mutex" startingBalance={500} />
    </div>
  );
}

export default App;
