import AccountDisplay from "./components/AccountDisplay";

function App() {
  return (
    <div className="App">
      <AccountDisplay startingBalance={500} />
      <AccountDisplay startingBalance={500} />
    </div>
  );
}

export default App;
