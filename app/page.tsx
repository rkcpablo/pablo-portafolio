export default function Home() {
  const projects = [
    {
      title: "Openbank Migration",
      subtitle: "SQL • Data Migration • Banking",
      description:
        "Built and maintained complex SQL queries used daily during migration processes across Argentina, Spain, Germany, and the Netherlands.",
    },
    {
      title: "MainRail Predictive Maintenance",
      subtitle: "Python • Data Cleaning • Predictive Analytics",
      description:
        "Gathered, cleaned, and analyzed railway data to support predictive maintenance models and improve infrastructure reliability.",
    },
    {
      title: "Amadeus Payment Analytics",
      subtitle: "ETL • Payments • KPI Monitoring",
      description:
        "Worked on analytics and ETL pipelines processing millions of daily payment transactions and generating KPI reporting for business monitoring.",
    },
    {
      title: "La Liga Match Prediction",
      subtitle: "Machine Learning • Sports Analytics • Python",
      description:
        "Collected and cleaned football data, engineered rollout statistics, and structured a predictive model to estimate match outcomes.",
    },
    {
      title: "NBA Salary Prediction",
      subtitle: "Data Analysis • Modeling • Sports Data",
      description:
        "Gathered, cleaned, and analyzed NBA player statistics to understand how on-court performance patterns relate to salary levels.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-4">
            Pablo Khouri
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl mb-6">
            Data projects with real business and analytical depth.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-8">
            I build data-driven projects across analytics, SQL, machine
            learning, ETL pipelines, and predictive modeling.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rkcpablo"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-slate-700 hover:bg-slate-900 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-sm p-6">
            <h2 className="text-xl font-semibold mb-3">Focus</h2>
            <p className="text-slate-300">
              Analytics, SQL, Python, ETL workflows, machine learning, and KPI
              tracking.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-sm p-6">
            <h2 className="text-xl font-semibold mb-3">Style</h2>
            <p className="text-slate-300">
              Business-minded data work with technical execution and clear
              decision-making value.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-sm p-6">
            <h2 className="text-xl font-semibold mb-3">Tools</h2>
            <p className="text-slate-300">
              Python, SQL, Excel, Power BI, Qlik, ETL pipelines, predictive
              modeling.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Selected Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-7 hover:-translate-y-1 hover:border-cyan-400/40 transition"
              >
                <p className="text-sm text-cyan-400 mb-3">{project.subtitle}</p>
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-slate-300 leading-7">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}