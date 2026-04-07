import Link from "next/link";

export default function AmadeusPage() {
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
          ETL • Payments • KPI Monitoring
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Amadeus Payment Analytics
        </h1>

        <p className="text-lg text-slate-300 max-w-3xl mb-10">
          Analytics and ETL pipelines processing millions of daily payment transactions and supporting KPI reporting.
        </p>
      </section>
    </main>
  );
}