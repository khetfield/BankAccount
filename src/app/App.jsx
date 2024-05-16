import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";

import "./app.css";

const App = () => {
  return (
    <main>
      <h1>Bank Account</h1>
      <Transactions />
      <TransactionHistory />
    </main>
  );
};

export default App;