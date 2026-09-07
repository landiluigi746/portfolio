import About from "./components/About";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectsList";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="font-[Google_Sans_Flex] bg-zinc-950 min-h-screen">
      <Navbar />
      <About />
      <TechStack />
      <ProjectList />
      <Contacts />
    </div>
  );
}

export default App;
