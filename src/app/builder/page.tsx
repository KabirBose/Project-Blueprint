export default function Builder() {
  return (
    <div className="p-4">
      <h1 className="font-bold text-3xl drop-shadow-xl">
        Start building your schedule!
      </h1>

      <div className="bg-gray-100 h-[85vh] w-full mt-4 flex justify-center items-center">
        <div className="bg-gray-50 h-full w-2/6">
          <h3 className="p-4 font-semibold text-xl">Courses</h3>
          <ul className="p-4 flex flex-col gap-5">
            <li className="p-4 font-medium bg-black text-white rounded-md w-full">
              Introduction to Programming
            </li>
            <li className="p-4 font-medium bg-black text-white rounded-md w-full">
              Data Structures & Algorithms
            </li>
            <li className="p-4 font-medium bg-black text-white rounded-md w-full">
              Computer Security
            </li>
            <li className="p-4 font-medium bg-black text-white rounded-md w-full">
              Discrete Mathematics
            </li>
            <li className="p-4 font-medium bg-black text-white rounded-md w-full">
              Calculus I
            </li>
          </ul>
        </div>

        <div className="bg-gray-200 h-full w-4/6">
          <h3 className="p-4 font-semibold text-xl">Schedule</h3>
        </div>
      </div>
    </div>
  );
}
