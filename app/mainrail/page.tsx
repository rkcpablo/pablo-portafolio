import Link from "next/link";

export default function MainrailPage() {
  const tags = [
    "Python",
    "Predictive Analytics",
    "Data Cleaning",
    "Feature Engineering",
    "Infrastructure",
  ];

  const responsibilities = [
    "Collected and prepared railway data for analysis",
    "Cleaned and structured datasets for predictive maintenance use cases",
    "Explored data patterns linked to maintenance needs",
    "Supported model-building logic to anticipate rail issues",
  ];

  const challenges = [
    {
      title: "Data Preparation",
      text: "Worked through raw and imperfect data to make it structured, usable, and analysis-ready.",
    },
    {
      title: "Predictive Logic",
      text: "Translated maintenance problems into variables and analytical signals that could support prediction.",
    },
    {
      title: "Real-World Context",
      text: "Connected technical analysis with an operational infrastructure problem where reliability matters.",
    },
  ];

  const takeaways = [
    "Stronger Python and data cleaning skills",
    "Better understanding of predictive maintenance workflows",
    "Experience applying analytics to real operational problems",
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
            MainRail Case Study
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Rail Maintenance Prediction with Python
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mb-6">
            Worked on data gathering, cleaning, and predictive analysis to support
            maintenance planning in a railway infrastructure context.
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
              The project focused on using data to better understand maintenance
              needs and support more proactive infrastructure decisions. Predictive
              maintenance can help reduce failures, improve planning, and increase
              operational reliability.
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
            Add MainRail visual here
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