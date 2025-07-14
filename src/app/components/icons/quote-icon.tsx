"use client";

import { QuotesIcon as Quotes, type IconWeight } from "@phosphor-icons/react";

type QuotesIconProps = {
  color?: string;
  size?: number;
  weight?: IconWeight;
};

export default function QuotesIcon({ color, size, weight }: QuotesIconProps) {
  return (
    <Quotes
      aria-label="View shopping cart"
      size={size}
      weight={weight}
      color={color}
    />
  );
}
