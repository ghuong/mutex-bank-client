import AccountDisplay from "./components/AccountDisplay";

function App() {
  return (
    <div className="App">
      <AccountDisplay accountName="With Mutex" startingBalance={0} useMutex={true} />
      <AccountDisplay accountName="Without Mutex" startingBalance={0} />
    </div>
  );
}

export default App;
