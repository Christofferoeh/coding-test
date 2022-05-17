import './App.css';
import BasicText from "./solutions/components/BasicText";
import UserDisplay from "./solutions/components/UserDisplay";
import Parent from "./solutions/components/Parent";

function App() {
  return (
    <div className="App">
        <h1>Solutions for coding interview</h1>
        <h2>1.</h2>
        <BasicText text="Hello World"/>
        <h2>2.</h2>
        <UserDisplay/>
        <Parent/>
    </div>
  );
}

export default App;
