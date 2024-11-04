import Navbar from "./components/navbar/Navbar";
import ScrollUp from "./components/scrollUp/ScrollUp";
import MainContainer from "./main/MainContainer";
function App() {
  return (
    <>
      <Navbar id="navbar"/>
      <MainContainer />
      <ScrollUp /> {/* Include the button here */}

    </>
  );
}

export default App;
