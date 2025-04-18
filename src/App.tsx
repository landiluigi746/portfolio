import "./App.css";
import About from "./components/About";
import ProjectList from "./components/ProjectsList";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <About />
      <ProjectList />
    </div>
  );
}

export default App;
