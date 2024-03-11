import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableHeader}>
        <tr className={css.headerRow}>
          <th className={css.headerTitle}>Type</th>
          <th className={css.headerTitle}>Amount</th>
          <th className={css.headerTitle}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {items.map(transaction => (
          <tr key={transaction.id} className={css.tableRow}>
            <td className={css.rowValue}>{transaction.type}</td>
            <td className={css.rowValue}>{transaction.amount}</td>
            <td className={css.rowValue}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
