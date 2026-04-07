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
            Welcome to my portfolio! Take a look at my experiences and if you have any questions reach out
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/pablo-khouri-189427222/"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 mb-20">
          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-sm p-6">
            <h2 className="text-xl font-semibold mb-3">About Me</h2>
            <p className="text-slate-300">
              Always a curious and analytical professional, eager to learn, solve problems,
              and contribute to the development of impactful ideas. I pay close attention
              to detail while maintaining focus on the bigger strategic picture.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-sm p-6">
            <h2 className="text-xl font-semibold mb-5">Tools</h2>

            <div className="grid md:grid-cols-3 gap-6 text-slate-300">
              <div>
                <p className="text-white font-medium mb-2">Core</p>
                <ul className="space-y-1">
                  <li>• Python</li>
                  <li>• SQL</li>
                  <li>• Excel</li>
                </ul>
              </div>

              <div>
                <p className="text-white font-medium mb-2">Analytics</p>
                <ul className="space-y-1">
                  <li>• ETL Pipelines</li>
                  <li>• Statistical Analysis</li>
                  <li>• Predictive Modeling</li>
                </ul>
              </div>

              <div>
                <p className="text-white font-medium mb-2">Visualization</p>
                <ul className="space-y-1">
                  <li>• Power BI</li>
                  <li>• Tableau</li>
                  <li>• Qlik Sense</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-sm p-6">
  <h2 className="text-xl font-semibold mb-6">Certifications</h2>

  <div className="grid md:grid-cols-3 gap-6 text-center">
    <div className="p-4 rounded-2xl border border-slate-700">
      <img
        src="/mta.png"
        alt="Database Fundamentals"
        className="h-28 mx-auto mb-4"
      />
      <p className="font-medium">Database Fundamentals</p>
    </div>

    <div className="p-4 rounded-2xl border border-slate-700">
      <img
        src="/azure.png"
        alt="Azure Fundamentals"
        className="h-28 mx-auto mb-4"
      />
      <p className="font-medium">Azure Fundamentals</p>
    </div>

    <div className="p-4 rounded-2xl border border-slate-700">
      <img
        src="/excel.png"
        alt="Excel Specialist"
        className="h-28 mx-auto mb-4"
      />
      <p className="font-medium">Excel Specialist</p>
    </div>
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