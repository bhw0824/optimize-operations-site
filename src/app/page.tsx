export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Optimize Operations
        </p>

        <h1 className="mb-6 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          Modernize Your Business Operations
        </h1>

        <p className="mb-10 max-w-2xl text-xl leading-8 text-slate-600">
          We help small businesses reduce administrative workload, streamline
          workflows, and improve operational efficiency through practical
          automation systems.
        </p>

        <div className="flex flex-wrap gap-4">
          <a className="rounded-xl bg-slate-950 px-6 py-3 text-white" href="#contact">
            Request Operational Review
          </a>
          <a className="rounded-xl border border-slate-300 px-6 py-3" href="#packages">
            View System Packages
          </a>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-semibold">System Packages</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Lead & Client Operations",
            "Administrative Automation",
            "Operational Dashboards",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-3 text-xl font-semibold">{item}</h3>
              <p className="text-slate-600">
                Practical systems designed to reduce manual work and improve daily coordination.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-slate-950 p-10 text-white">
          <h2 className="mb-4 text-3xl font-semibold">Request an Operational Review</h2>
          <p className="mb-6 text-slate-300">
            We’ll review your workflows, bottlenecks, and admin load to identify where systems can help.
          </p>
          <a className="rounded-xl bg-white px-6 py-3 text-slate-950" href="mailto:admin@optimize-operations.com">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}