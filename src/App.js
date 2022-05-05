import AccountDisplay from "./components/AccountDisplay";

function App() {
  return (
    <div className="App">
      <AccountDisplay
        accountName="🔐 Mutex-Secured Account"
        startingBalance={0}
        useMutex={true}
      />
      <AccountDisplay accountName="👎 No Mutex Account" startingBalance={0} />
    </div>
  );
}

export default App;
