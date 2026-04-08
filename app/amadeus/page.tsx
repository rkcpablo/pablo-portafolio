import Link from "next/link";

export default function AmadeusPage() {
  const tags = ["Payments", "ETL", "KPI Reporting", "Qlik", "Data Analytics"];

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

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-4">
            Amadeus Case Study
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Payment Analytics & ETL Monitoring
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mb-6">
            Worked on analytics and ETL workflows supporting payment transaction
            monitoring and KPI reporting in a high-volume business environment.
          </p>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-200"
              >
                {tag}
              </span>
            ))}
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

          <div className="rounded-2xl border border-dashed border-slate-700 p-6 text-slate-400">
            Add Amadeus visual here
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