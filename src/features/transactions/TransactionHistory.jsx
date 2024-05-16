import "./transactionHistory.scss";
import { useSelector } from "react-redux";

const TransactionRow = ({ transaction: { type, amount, balance } }) => (
  <tr>
    <th scope="row">{type}</th>
    <td>{amount.toFixed(2)}</td>
    <td>{balance.toFixed(2)}</td>
  </tr>
);

export default function TransactionHistory() {
  const history = useSelector(state=>state.transactions.history);

  console.log(history)

  return (
    <section className="transactions-history container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {history.map((transaction, index) => (
              <TransactionRow key={index} transaction={transaction}  />
            ))
          }
        </tbody>
      </table>
    </section>
  );
}