import PropTypes from 'prop-types';
import {
  TableTransaction,
  TableTitle,
  TableValue,
  HeadStr,
  ValueStr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <thead>
        <HeadStr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </HeadStr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <ValueStr key={id}>
            <TableValue>{type}</TableValue>
            <TableValue>{amount}</TableValue>
            <TableValue>{currency}</TableValue>
          </ValueStr>
        ))}
      </tbody>
    </TableTransaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
