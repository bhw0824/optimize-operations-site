export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
            Optimize Operations
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Modernize Your Business Operations
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            We help small businesses reduce administrative workload,
            streamline workflows, and improve operational efficiency
            through practical operational systems.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg">
              Request Operational Review
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg">
              View System Packages
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}