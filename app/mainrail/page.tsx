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
            MainRail
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Rail Maintenance Prediction with Python
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mb-6">
            Worked on data gathering, cleaning, and predictive analysis to support
            maintenance planning in a railway infrastructure context.
          </p>

          <div>
            <p className="text-sm text-slate-400 mb-3">
              Click here to learn more about Mainrail
            </p>

            <a
              href="https://elreferente.es/inversiones/mainrail-obtiene-854000-nueva-ronda-de-financiacion/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 hover:scale-105 transition"
            >
              <span className="text-cyan-400 text-sm font-medium">
                Visit Website →
              </span>
            </a>
          </div>

          <div className="shrink-0">
            <img
              src="/mainrail-logo.jpg"
              alt="Mainrail logo"
              className="h-20 w-auto rounded-2xl bg-white p-3 shadow-lg"
            />
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

        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 md:p-8 overflow-hidden">
          <div className="mt-16">
            <p className="text-3xl font-bold mb-6">
              Technical Overview
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-black/40 overflow-x-auto">
            <table className="w-full min-w-[900px] text-sm text-left text-slate-300">
              <thead className="bg-white/5 text-slate-400 uppercase tracking-[0.18em] text-xs">
                <tr>
                  <th className="px-4 py-4">rail_id</th>
                  <th className="px-4 py-4">curvature</th>
                  <th className="px-4 py-4">material</th>
                  <th className="px-4 py-4">km</th>
                  <th className="px-4 py-4">temperature</th>
                  <th className="px-4 py-4">elevation</th>
                  <th className="px-4 py-4">days_since_last_failure</th>
                  <th className="px-4 py-4">stress</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-slate-800">
                  <td className="px-4 py-4 font-medium text-white">rail_id_01</td>
                  <td className="px-4 py-4 bg-orange-500/20 text-orange-200">8.7°</td>
                  <td className="px-4 py-4 bg-yellow-500/20 text-yellow-200">Steel-A</td>
                  <td className="px-4 py-4 bg-red-500/25 text-red-200 font-semibold">124.8</td>
                  <td className="px-4 py-4 bg-red-500/30 text-red-200 font-semibold">46.2°C</td>
                  <td className="px-4 py-4 bg-orange-500/20 text-orange-200">1,420 m</td>
                  <td className="px-4 py-4 bg-red-500/30 text-red-200 font-semibold">187</td>
                  <td className="px-4 py-4 bg-red-500/35 text-red-100 font-bold">92.4</td>
                </tr>

                <tr className="border-t border-slate-800">
                  <td className="px-4 py-4 font-medium text-white">rail_id_02</td>
                  <td className="px-4 py-4 bg-yellow-500/15 text-yellow-200">5.1°</td>
                  <td className="px-4 py-4">Steel-B</td>
                  <td className="px-4 py-4">98.3</td>
                  <td className="px-4 py-4 bg-yellow-500/15 text-yellow-200">34.8°C</td>
                  <td className="px-4 py-4">1,050 m</td>
                  <td className="px-4 py-4 bg-orange-500/15 text-orange-200">96</td>
                  <td className="px-4 py-4 bg-yellow-500/15 text-yellow-200">61.7</td>
                </tr>

                <tr className="border-t border-slate-800">
                  <td className="px-4 py-4 font-medium text-white">rail_id_03</td>
                  <td className="px-4 py-4">3.4°</td>
                  <td className="px-4 py-4">Composite-X</td>
                  <td className="px-4 py-4">76.9</td>
                  <td className="px-4 py-4">27.1°C</td>
                  <td className="px-4 py-4">860 m</td>
                  <td className="px-4 py-4">41</td>
                  <td className="px-4 py-4 bg-green-500/10 text-green-200">28.9</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4">
            <p className="font-mono text-sm md:text-base text-cyan-200">
              {'>'} Random Forest predicts with{" "}
              <span className="font-bold text-white">88%</span> confidence that{" "}
              <span className="font-bold text-white">rail_id_01</span> is likely to
              experience <span className="font-bold text-white">rail buckling</span> in
              the near future.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}