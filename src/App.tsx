import "./App.css";
import About from "./components/About";
import ProjectList from "./components/ProjectsList";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <About />
      <TechStack />
      <ProjectList />
    </div>
  );
}

export default App;
