import FAQ from "./sections/FAQ";
import Help from "./sections/Help";
import ReasonsSection from "./sections/ReasonsSection";
import UnlockSection from "./sections/UnlockSection";

function App() {
  return (
    <>
      <UnlockSection />
      <div className="w-[90vw] h-[2px] bg-slate-300 my-12 mx-auto rounded-md" />
      <ReasonsSection />
      <FAQ />
      <Help />
    </>
  );
}

export default App;
