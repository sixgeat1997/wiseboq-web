import Link from "next/link";
import React from "react";

interface IButton {
  name: string;
  onClick?: () => void;
  className?: string;
}

export function UseButton({
  name,
  className = "p-3 my-12 text-2xl bg-yellow-500 ",
  onClick,
}: IButton) {
  return (
    <div>
      <div
        onClick={() => (onClick ? onClick() : "")}
        className={className + " w-fit rounded-md cursor-pointer"}
      >
        {name}
      </div>
    </div>
  );
}
