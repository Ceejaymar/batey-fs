"use client";

import { type Stock } from "../../../types";

type StockProps = {
  stock: Stock;
};

export default function Stock({ stock }: StockProps) {
  return (
    <div>
      {Object.keys(stock).map((key) => {
        return (
          <div key={key} onClick={() => {}}>
            {key.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
}
