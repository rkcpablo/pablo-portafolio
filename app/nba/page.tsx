import Link from "next/link";

export default function NbaPage() {
  const tags = [
    "Python",
    "Data Analysis",
    "Sports Analytics",
    "Regression",
    "Predictive Modeling",
  ];

  const responsibilities = [
    "Collected and cleaned NBA player performance and salary data",
    "Explored relationships between on-court statistics and salary levels",
    "Structured data for analysis and modeling",
    "Used analytics to understand which performance indicators aligned most with compensation",
  ];

  const challenges = [
    {
      title: "Data Merging",
      text: "Combined player statistics and salary information into a usable dataset for analysis.",
    },
    {
      title: "Feature Selection",
      text: "Identified which basketball metrics were most relevant for understanding salary patterns.",
    },
    {
      title: "Interpretation",
      text: "Connected statistical outputs with real-world salary dynamics and player value.",
    },
  ];

  const takeaways = [
    "Stronger understanding of regression-style analysis",
    "Better ability to connect performance metrics with business-style outcomes",
    "Hands-on experience cleaning and modeling sports data",
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
            NBA Case Study
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            NBA Salary Prediction
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mb-6">
            Built a sports analytics project to examine how player statistics
            relate to NBA salary levels through data collection, cleaning,
            analysis, and predictive modeling.
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
            <h2 className="text-2xl font-semibold mb-4">Project Context</h2>
            <p className="text-slate-300 leading-7">
              The project explored whether player performance data could explain
              or help predict salary levels, turning basketball statistics into
              a structured analytical and modeling problem.
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
            Add NBA visual here
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