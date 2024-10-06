import Button from "@/components/button/button";

export default function Page() {
  return (
    <div className="flex justify-center items-center flex-col h-[100vh] gap-12">
      <h1 className="font-bold text-3xl drop-shadow-xl">
        Welcome to the onboarding guide!
      </h1>

      <form className="flex flex-col gap-4 bg-gray-50 w-fit p-10 rounded-md drop-shadow-xl">
        <div className="flex flex-col w-64">
          <label htmlFor="name" className="font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="bg-gray-100 px-3 py-2 rounded-sm"
          />
        </div>

        <div className="flex flex-col w-64">
          <label htmlFor="school" className="font-medium">
            University/College
          </label>
          <input
            type="text"
            name="school"
            className="bg-gray-100 px-3 py-2 rounded-sm"
          />
        </div>

        <div className="flex flex-col w-64">
          <label htmlFor="student-email" className="font-medium">
            Student Email
          </label>
          <input
            type="email"
            name="student-email"
            className="bg-gray-100 px-3 py-2 rounded-sm"
          />
        </div>

        <div className="flex flex-col w-64">
          <label htmlFor="student-number" className="font-medium">
            Student Number
          </label>
          <input
            type="number"
            name="student-number"
            className="bg-gray-100 px-3 py-2 rounded-sm"
          />
        </div>

        <Button text="Submit" />
      </form>
    </div>
  );
}
