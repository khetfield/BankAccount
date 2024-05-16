import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deposit, withdrawal, transfer} from "./transactionsSlice";
import "./transactions.scss";

export default function Transactions() {
  const balance = useSelector(state=>state.transactions.balance);

  const [amountStr, setAmountStr] = useState("0.00");
  const [alertMessage, setAlertMessage] = useState("");
  const dispatch = useDispatch();

  const onTransaction = (e) => {
    e.preventDefault();

    const action = e.nativeEvent.submitter.name;

    const amount = +amountStr;

    if ((action != "deposit") && (+amountStr > balance)) {
        setAlertMessage("Insufficient balance for this withdrawal");
    } else {
    
    if (action === "deposit") {
      dispatch(deposit({amount}));
    } else if (action === "withdrawal") {
      dispatch(withdrawal({amount}));
    } else if (action === "transfer") {
      dispatch(transfer({amount}))
    }
      setAlertMessage("");
  }};

  return (
    <section className="transactions container">
      <h2>Transactions</h2>
      <figure>
        <figcaption>Current Balance &nbsp; </figcaption>
        <strong>${balance.toFixed(2)}</strong> 
      </figure>
      <h3>{alertMessage}</h3>
      <form onSubmit={onTransaction}>
        <div className="form-row">
          <label>
            Amount
            <input
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              value={amountStr}
              onChange={(e) => setAmountStr(e.target.value)}
            />
          </label>
          <div>
            <button default name="deposit">
              Deposit
            </button>
            <button name="withdrawal">Withdraw</button>
          </div>
        </div>
        <div className="form-row">
          <label>
            Transfer to
            <input type="text" placeholder="Recipient Name" name="recipient" />
          </label>
          <button name="transfer">Transfer</button>
        </div>
      </form>
    </section>
  );
}