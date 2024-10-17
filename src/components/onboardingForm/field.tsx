import React from "react";

interface Props {
  name: string;
  type: string;
  id: string;
  setState: any;
  state: string | number | undefined;
}

export default function Field({ name, type, id, state, setState }: Props) {
  return (
    <div className="flex flex-col w-64">
      <label htmlFor={id} className="font-medium">
        {name}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-100 px-3 py-2 rounded-sm"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.value)
        }
        value={state}
      />
    </div>
  );
}
