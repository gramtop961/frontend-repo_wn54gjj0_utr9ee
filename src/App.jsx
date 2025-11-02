import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-200/60 to-purple-200/30 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}
