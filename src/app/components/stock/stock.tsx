"use client";
import { useState } from "react";
import clsx from "clsx";

import { type Size, type Stock } from "../../../types";
import classes from "./stock.module.scss";

type StockProps = {
  stock: Stock;
};

export default function Stock({ stock }: StockProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <fieldset className={classes.stockWrapper}>
      <legend className={classes.selectSize}>Select a size</legend>
      {Object.keys(stock).map((size) => {
        const isDisabled = stock[size as Size] === 0;
        return (
          <label
            key={size}
            onClick={() => {}}
            className={clsx(
              classes.sizeOption,
              selectedSize === size && classes.selected,
              isDisabled && classes.disabled
            )}
          >
            <input
              type="radio"
              name="size"
              value={size}
              disabled={isDisabled}
              checked={selectedSize === size}
              onChange={() => setSelectedSize(size)}
              className="sr-only"
            />
            {size}
          </label>
        );
      })}
    </fieldset>
  );
}
