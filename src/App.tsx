import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectsList";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <About />
      <TechStack />
      <ProjectList />
      <Contacts />
    </div>
  );
}

export default App;
