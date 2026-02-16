import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Animated background shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="py-20 px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-2xl text-gray-400">
            Software engineering student at Makerere University.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Education */}
          <section className="group">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="h-8 w-1 bg-gradient-to-b from-purple-500 to-blue-500" />
              Education
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-gray-800 pl-6 hover:border-purple-500/50 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2">Makerere University</h3>
                <p className="text-gray-400">Bachelor of Science in Software Engineering - Year III</p>
              </div>
              <div className="border-l-2 border-gray-800 pl-6 hover:border-purple-500/50 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2">Ntare School</h3>
                <p className="text-gray-400">Uganda Advanced Certificate of Education</p>
              </div>
              <div className="border-l-2 border-gray-800 pl-6 hover:border-purple-500/50 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2">Kitabi Seminary</h3>
                <p className="text-gray-400">Uganda Certificate of Education</p>
              </div>
            </div>
          </section>


          {/* Fellowships */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="h-8 w-1 bg-gradient-to-b from-purple-500 to-blue-500" />
              Fellowships
            </h2>
            <div>
            <a href="https://www.millenniumfellows.org/fellow/2025/makerere/asasira-arthur-" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
              <p className="font-semibold text-lg">Millennium Fellow Class of 2025</p>
            </a>
              
            </div>
          </section>

          {/* Leadership */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="h-8 w-1 bg-gradient-to-b from-purple-500 to-blue-500" />
              Community Leadership
            </h2>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-8 mb-8 space-y-4 text-lg text-gray-300 leading-relaxed hover:border-gray-700 transition-all duration-300">
              <p>
                Beyond writing code, I&apos;m deeply invested in vibrant tech
                communities. I serve in various communities; Google developer Groups on Campus Makerere University, IEEE Makerere University Student Branch, Student Energy makerere University, IEEE PES Makerere University chapter, Web3 Makerere University.
              </p>
              <p>
                I believe that the best technology emerges from diverse, inclusive
                communities where everyone has a voice and opportunity to contribute.
              </p>
            </div>
            
            {/* Leadership Roles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-lg mb-2">Co-Lead</h3>
                <p className="text-gray-300 mb-2">Google Developer Groups on Campus Makerere University</p>
                <p className="text-sm text-purple-400">2025 to date</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-lg mb-2">IEEE PES Chapter Chair</h3>
                <p className="text-gray-300 mb-2">Makerere University</p>
                <p className="text-sm text-purple-400">2025 to date</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-lg mb-2">Tech and Media Lead</h3>
                <p className="text-gray-300 mb-2">Makerere University IEEE Student Branch</p>
                <p className="text-sm text-purple-400">May 2025 to date</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-lg mb-2">Organising Secretary</h3>
                <p className="text-gray-300 mb-2">Student Energy Makerere University</p>
                <p className="text-sm text-purple-400">2025</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-lg mb-2">Media Lead</h3>
                <p className="text-gray-300 mb-2">Google Developer Groups on Campus Makerere University</p>
                <p className="text-sm text-purple-400">2024 to 2025</p>
              </div>
            </div>
          </section>

          {/* Founder */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="h-8 w-1 bg-gradient-to-b from-purple-500 to-blue-500" />
              Founder
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <p className="font-semibold text-lg mb-2">Prodomate</p>
                <a href="https://prodomate.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">prodomate.com →</a>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <p className="font-semibold text-lg mb-2">Tundamate</p>
                <a href="https://tundamate.xyz" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">tundamate.xyz →</a>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <p className="font-semibold text-lg">ECO-COPS</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <p className="font-semibold text-lg mb-2">Itungo</p>
                <a href="https://itungo.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">itungo.com →</a>
              </div>
            </div>
          </section>

        {/* Speaker */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="h-8 w-1 bg-gradient-to-b from-purple-500 to-blue-500" />
              Speaker
            </h2>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
              <a href="https://sessionize.com/s/asasira-arthur/connecting-the-unconnectable-exploring-lorawan-for/163824" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative h-64 md:h-80 w-full">
                  <Image
                    src="/gallery/talk.jpeg"
                    alt="DevFest Mbarara 2025 - Connecting the unconnectable"
                    fill
                    className="object-cover top-1"
                  />
                </div>
                <div className="p-6">
                  <p className="font-semibold text-lg mb-2">DevFest Mbarara 2025</p>
                  <p className="text-gray-400">Connecting the unconnectable</p>
                </div>
              </a>
            </div>
          </section>

          {/* Internships */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="h-8 w-1 bg-gradient-to-b from-purple-500 to-blue-500" />
              Internships
            </h2>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Makerere University IoT-ra Lab Intern</h3>
              <p className="text-sm text-purple-400 mb-4">May 2025 to date</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">→</span>
                  <span>Three-way communications module (LoRaWAN, Wi-Fi and GSM)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">→</span>
                  <span>Mushroom monitoring and control system</span>
                </li>
              </ul>
            </div>
          </section>

  
          {/* Interests and Skills */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="h-8 w-1 bg-gradient-to-b from-purple-500 to-blue-500" />
              Interests
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-colors">Gen AI & ML</span>
              <span className="px-4 py-2 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-colors">Embedded Systems</span>
              <span className="px-4 py-2 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-colors">Web Development</span>
            </div>
          </section>

          {/* CTA */}
          <section className="pt-10 border-t border-gray-800">
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Connect</h2>
            <p className="text-lg text-gray-300 mb-8">
              Feel free to reach out.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="mailto:asasiraarthur@gmail.com"
                className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/asasira-arthur-602a131ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/kagwa_arthur"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                X 
              </a>
              {/* github */}
                <a
                href="https://github.com/ArthurKagwa"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
