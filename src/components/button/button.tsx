interface Props {
  className?: string;
  text: string;
}

export default function Button({ className, text }: Props) {
  return (
    <button className="bg-black drop-shadow-lg px-4 py-3 text-white font-semibold rounded-md">
      {text}
    </button>
  );
}
