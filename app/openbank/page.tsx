import Link from "next/link";

export default function OpenbankPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white">
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/"
          className="inline-block mb-8 text-cyan-400 hover:text-cyan-300 transition"
        >
          ← Back to Portfolio
        </Link>

        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-4">
          SQL • Data Migration • Banking
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Openbank Migration
        </h1>

        <p className="text-lg text-slate-300 max-w-3xl mb-10">
          Complex SQL work supporting migration processes across Argentina,
          Spain, Germany, and the Netherlands.
        </p>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-slate-800 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-slate-300">
              Worked on complex SQL queries used daily in migration-related data
              processes across multiple countries and banking environments.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-3">What I Did</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Built and maintained complex SQL queries.</li>
              <li>Supported migration workflows across multiple markets.</li>
              <li>Worked with structured data under operational constraints.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-3">Tools Used</h2>
            <p className="text-slate-300">SQL, Excel, banking data workflows.</p>
          </div>

          <div className="rounded-3xl border border-dashed border-slate-700 p-6">
            <h2 className="text-2xl font-semibold mb-3">Visuals</h2>
            <p className="text-slate-400">
              Add screenshots, charts, presentation snapshots, or workflow diagrams here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}