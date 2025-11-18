import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Gradient glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 via-fuchsia-900/40 to-black" />

      {/* Spline 3D scene */}
      <div className="relative h-[70vh] sm:h-[80vh] lg:h-[85vh]">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-end">
        <div className="w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-indigo-300 to-sky-300 drop-shadow-[0_4px_24px_rgba(168,85,247,0.35)]">
                Lazi Works
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-white/80">
              The living feed of design, photo and film projects from the lazi akademie community.
              Dreamy. Experimental. Alive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
