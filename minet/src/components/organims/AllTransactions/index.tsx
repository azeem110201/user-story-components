import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import WalletTransaction from "../../molecules/WalletTransaction";

export type TransactionType = {
  id: number;
  date: string;
  icon: object[];
  coinName: string;
  sender: string;
  transactionStatus: boolean;
  transactionType: boolean;
  amount: string;
};

interface TransactionProps {
  style?: React.CSSProperties;
}

const AllTransactions = (props: TransactionProps) => {
  const [transactions, setTransactions] = React.useState<TransactionType[]>([]);

  const getAllUserTransaction = async (id: number) => {
    await axios
      .get(`/transactions/${id}`)
      .then((data) => {
        setTransactions(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllUserTransaction(2);
  }, []);
  return (
    <div>
      <Grid container direction={"column"} sx={props.style}>
        {transactions.map((transaction) => {
          return (
            <WalletTransaction
              key={transaction.id}
              date={transaction.date}
              icon={transaction.icon}
              coinName={transaction.coinName}
              sender={transaction.sender}
              amount={transaction.amount}
              transactionStatus={transaction.transactionStatus}
              transactionType={transaction.transactionType}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default AllTransactions;
