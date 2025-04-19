function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="mx-auto w-max">
      <div className="fixed top-4 -translate-x-1/2 z-50 p-2 flex flex-row bg-gray-800 rounded-3xl gap-3 opacity-95">
        {["about", "tech-stack", "projects", "contacts"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="font font-semibold text-zinc-100 px-4 py-2 rounded-2xl hover:cursor-pointer hover:bg-gray-900 transition-all capitalize"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
