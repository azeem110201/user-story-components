import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import TradeTabs from "../../molecules/TradeTabs";

const Trade = () => {
  const [tradeData, setTradeData] = React.useState([]);

  useEffect(() => {
    axios
      .get("/trade")
      .then((data) => {
        setTradeData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [tradeData]);

  const handleTradeClicked = (id: number) => {
    // navigate to that particular trade page
  }
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Change</TableCell>
            <TableCell align="left">Market Cap.</TableCell>
            <TableCell align="left">Watch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tradeData.map((trade) => {
            return (
              <TableRow onClick={ () => handleTradeClicked(trade.id) } key={trade.id}>
                <TradeTabs
                  name={trade.name}
                  icon={trade.icon}
                  ticker={trade.ticker}
                  price={trade.price}
                  change={trade.change}
                  marketCap={trade.marketCap}
                  watch={trade.watch}
                />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Trade;
