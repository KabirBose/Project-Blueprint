export default function Schedule() {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <div>
      <div className="flex justify-center items-center gap-10">
        <p className="bg-blue-500 rounded-md p-3 text-white">
          Intro to Chemistry
        </p>
        <p className="bg-blue-500 rounded-md p-3 text-white">Calculus I</p>
        <p className="bg-blue-500 rounded-md p-3 text-white">Discrete Math</p>
        <p className="bg-blue-500 rounded-md p-3 text-white">
          Organic Chemistry
        </p>
        <p className="bg-blue-500 rounded-md p-3 text-white">Biology</p>
      </div>

      <div className="bg-gray-100 h-[80vh] mt-10 grid grid-cols-5 grid-rows-10">
        {[...Array(50)].map((item, i) => (
          <div className="border border-black" key={i}>
            {i % 5 === 0 && i > 0 && "Time"}
            {i >= 0 && i <= 4 && weekdays[i]}
          </div>
        ))}
      </div>
    </div>
  );
}
