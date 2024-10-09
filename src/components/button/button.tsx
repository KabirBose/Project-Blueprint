import React from "react";

interface Props {
  className?: string;
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ className, text, onClick }: Props) {
  return (
    <button
      className={`bg-black drop-shadow-lg px-4 py-3 text-white font-semibold rounded-md ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
