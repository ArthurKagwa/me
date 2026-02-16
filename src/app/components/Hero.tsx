import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            {/* Progress line decoration */}
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-8 animate-pulse" />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Asasira Arthur
              <br />
              <span className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
               Building Digital Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
              Software engineering student, environmentalist and community leader crafting impactful solutions
              and empowering the next generation of developers.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#featured-work"
                className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                View My Work
              </a>
              <a
                href="/about"
                className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                About Me
              </a>
            </div>

            {/* Animated shape */}
            <div className="mt-12 flex gap-8 items-center">
              <div className="h-2 w-32 bg-purple-500/20 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-purple-500 rounded-full animate-pulse" />
              </div>
              <p className="text-sm text-gray-500">Scroll to explore</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <Image
                src="/gallery/pic.png"
                alt="Arthur Asasira"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative gradient */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl -z-10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
