import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />

        {/* Interactive Counter Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Interactive Demo
            </h2>
            <div className="card max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4">Counter: {count}</h3>
              <div className="flex gap-4 justify-center">
                <button
                  className="btn-primary"
                  onClick={() => setCount(count + 1)}
                >
                  Increment
                </button>
                <button className="btn-secondary" onClick={() => setCount(0)}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
