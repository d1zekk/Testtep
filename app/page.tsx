import { FloatingPathsBackground } from "./components/ui/floating-paths";

 export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <FloatingPathsBackground
        position={-1}
        className="min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold tracking-tight sm:text-8xl">
            DEPRIMM
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Exort.
          </p>

          <button className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-white/90">
            INVOK
          </button>
        </div>
      </FloatingPathsBackground>
    </main>
  );
}


