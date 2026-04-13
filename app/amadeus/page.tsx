import Link from "next/link";

export default function AmadeusPage() {
  const responsibilities = [
    "Worked on payment analytics and transaction monitoring",
    "Supported ETL processes handling large daily data volumes",
    "Helped build and validate KPI reporting for business visibility",
    "Analyzed payment-related data to support decision-making",
  ];

  const challenges = [
    {
      title: "High Data Volume",
      text: "Worked with large-scale transaction data that required consistency, structure, and reliable daily processing.",
    },
    {
      title: "Payments Complexity",
      text: "Handled data linked to payment flows, operational metrics, and business performance indicators.",
    },
    {
      title: "Reporting Readiness",
      text: "Supported the transformation of raw operational data into KPI-ready outputs for analysis and monitoring.",
    },
  ];

  const takeaways = [
    "Stronger exposure to payment data ecosystems",
    "Better understanding of ETL and KPI reporting workflows",
    "Experience working with large-scale operational analytics",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/"
          className="inline-block mb-8 text-cyan-400 hover:text-cyan-300 transition"
        >
          ← Back to Portfolio
        </Link>

        <div className="mb-12 flex items-start justify-between gap-10">
          <div className="flex-1 max-w-5xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-4">
              Amadeus Case Study
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Payment Analytics & ETL Monitoring
            </h1>

            <p className="text-lg text-slate-300 max-w-3xl mb-10">
              Worked on analytics and ETL workflows supporting payment transaction
              monitoring and KPI reporting in a high-volume business environment.
            </p>

            <div>
              <p className="text-sm text-slate-400 mb-3">
                Click here to learn more about Amadeus
              </p>

              <a
                href="https://amadeus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:scale-105 transition"
              >
                <span className="text-cyan-400 text-sm font-medium">
                  Visit Website →
                </span>
              </a>
            </div>
          </div>

          <div className="hidden md:flex shrink-0">
            <div className="h-32 w-32 md:h-40 md:w-40 rounded-[2rem] bg-white flex items-center justify-center p-6">
              <img
                src="/amadeus-logo.png"
                alt="Amadeus logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">What I Did</h2>
            <ul className="space-y-3 text-slate-300">
              {responsibilities.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">Business Context</h2>
            <p className="text-slate-300 leading-7">
              My work contributed to better visibility into payment activity by
              supporting ETL processes, monitoring data quality, and helping
              transform transactional data into decision-useful KPI reporting.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-6">Key Challenges</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                <p className="text-slate-300 leading-7">{challenge.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-sm p-6">
          <h2 className="text-3xl font-bold mb-6">Technical Overview</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold text-white">Pipeline Flow</h3>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                  </span>
                  System Healthy
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Raw Payments",
                  "ETL Transform",
                  "Validation Checks",
                  "Warehouse Load",
                  "BI Output",
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-full rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-5 text-center shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:border-cyan-400/50">
                      <p className="text-white font-semibold tracking-wide">{step}</p>
                    </div>
                    {index < 4 && (
                      <div className="h-8 w-px bg-gradient-to-b from-cyan-400 to-slate-700"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-sm p-6 shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-8">
                Monitoring Console
              </h3>

              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-4">
                    Ingestion Status
                  </p>
                  <div className="space-y-3 text-slate-300 text-sm">
                    <div className="flex justify-between">
                      <span>Transactions loaded</span>
                      <span className="text-white font-medium">2.4M rows</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment providers</span>
                      <span className="text-white font-medium">14 sources</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Execution mode</span>
                      <span className="text-white font-medium">Daily batch</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-4">
                    Validation Checks
                  </p>
                  <div className="space-y-3 text-sm text-slate-300">
                    <div className="flex justify-between">
                      <span>Duplicate control</span>
                      <span className="text-emerald-400 font-medium">Passed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Row reconciliation</span>
                      <span className="text-emerald-400 font-medium">Matched</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Null threshold</span>
                      <span className="text-emerald-400 font-medium">&lt; 0.5%</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-4">
                    Business Output
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-xl bg-slate-800/80 p-4 text-center">
                      <p className="text-xs text-slate-400 mb-2">Approval Rate</p>
                      <p className="text-white font-bold text-xl">92.3%</p>
                    </div>
                    <div className="rounded-xl bg-slate-800/80 p-4 text-center">
                      <p className="text-xs text-slate-400 mb-2">Decline Rate</p>
                      <p className="text-white font-bold text-xl">5.1%</p>
                    </div>
                    <div className="rounded-xl bg-slate-800/80 p-4 text-center">
                      <p className="text-xs text-slate-400 mb-2">Chargebacks</p>
                      <p className="text-white font-bold text-xl">1.2%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {takeaways.map((takeaway, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-sm p-6 text-slate-300"
              >
                {takeaway}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}