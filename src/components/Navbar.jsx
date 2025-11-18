import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-900/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-fuchsia-500 to-indigo-400 shadow-[0_0_30px_rgba(168,85,247,0.45)]" />
          <span className="text-white/90 font-semibold tracking-tight">lazi akademie</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#join" className="hover:text-white transition-colors">Join</a>
        </nav>
        <button className="md:hidden p-2 text-white/80">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
