import { useState } from 'react';
import './style.css';

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [billAmount, setBillAmount] = useState(0);
  const [myChoice, setMyChoice] = useState(0);
  const [friendChoice, setFriendChoice] = useState(0);

  const tip = Math.round((billAmount * (myChoice + friendChoice)) / 2 / 100);

  function handdleReset() {
    setBillAmount(0);
    setMyChoice(0);
    setFriendChoice(0);
  }

  return (
    <div>
      <BillInput billAmount={billAmount} onBillAmount={setBillAmount} />
      <SelectPurcentage choice={myChoice} onChoice={setMyChoice}>
        How did you like the service?
      </SelectPurcentage>
      <SelectPurcentage choice={friendChoice} onChoice={setFriendChoice}>
        How did your friend like the service?
      </SelectPurcentage>

      {billAmount > 0 ? (
        <>
          <Output billAmount={billAmount} tip={tip} />
          <Reset onReset={handdleReset} />
        </>
      ) : null}
    </div>
  );
}

function BillInput({ billAmount, onBillAmount }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type='number'
        value={`${billAmount}`}
        onChange={(e) => onBillAmount(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPurcentage({ choice, onChoice, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={choice} onChange={(e) => onChoice(Number(e.target.value))}>
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutly amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ billAmount, tip }) {
  return (
    <h3>
      You pay ${billAmount + tip} (${billAmount} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>reset</button>;
}

export default App;
