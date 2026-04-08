import Link from "next/link";

export default function LaligaPage() {
  const tags = [
    "Python",
    "Machine Learning",
    "Sports Analytics",
    "Feature Engineering",
    "Predictive Modeling",
  ];

  const responsibilities = [
    "Collected and cleaned historical football match data",
    "Built rollout statistics and structured model inputs",
    "Prepared features to predict match outcomes",
    "Connected analytical work with real-world sports performance patterns",
  ];

  const challenges = [
    {
      title: "Data Collection",
      text: "Gathered match data from multiple sources and prepared it for consistent analytical use.",
    },
    {
      title: "Feature Engineering",
      text: "Built rollout statistics and other structured inputs to better capture team form and performance trends.",
    },
    {
      title: "Prediction Framing",
      text: "Translated match outcomes into a modeling problem with useful variables and interpretable structure.",
    },
  ];

  const takeaways = [
    "Stronger feature engineering skills",
    "Better understanding of sports prediction modeling",
    "Hands-on experience turning raw data into model-ready inputs",
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
            La Liga Case Study
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Match Outcome Prediction with Rollout Statistics
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mb-6">
            Built a sports analytics project focused on collecting, cleaning,
            and modeling football data to predict match results using structured
            team-performance indicators.
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
              The goal was to understand how recent team form, historical match
              patterns, and structured football statistics could be transformed
              into predictive signals for match outcomes.
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
            Add La Liga visual here
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