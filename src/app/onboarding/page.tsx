import OnBoardingForm from "@/components/onboardingForm/onBoardingForm";

export default function Page() {
  return (
    <div className="flex justify-center items-center flex-col h-[100vh] gap-12">
      <h1 className="font-bold text-3xl drop-shadow-xl">
        Welcome to the onboarding guide!
      </h1>

      <OnBoardingForm />
    </div>
  );
}
