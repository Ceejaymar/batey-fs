"use client";

import {
  ShoppingCartIcon as ShoppingCart,
  type IconWeight,
} from "@phosphor-icons/react";

type ShoppingCartIconProps = {
  color?: string;
  size?: number;
  weight?: IconWeight;
};

export default function ShoppingCartIcon({
  color,
  size,
  weight,
}: ShoppingCartIconProps) {
  return (
    <ShoppingCart
      aria-label="View shopping cart"
      size={size}
      weight={weight}
      color={color}
    />
  );
}
