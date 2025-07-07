const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-primary-50 to-blue-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Amazing Apps with{" "}
            <span className="text-primary-600">Lovable.dev</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A modern React starter template with Tailwind CSS 3, TypeScript, and
            Vite. Perfect for creating beautiful, responsive web applications
            quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              Start Building
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              View Demo
            </button>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="bg-gradient-to-r from-primary-400 to-blue-500 rounded-xl h-64 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-xl font-semibold">Your App Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
