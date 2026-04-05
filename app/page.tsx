export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
          Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Pablo Khouri
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mb-10">
          Data professional focused on analytics, SQL, Python,
          machine learning and ETLs.
        </p>

        <div className="flex gap-4 mb-16">
          <a
            href="https://www.linkedin.com/in/pablo-khouri-189427222/"
            target="_blank"
            className="px-6 py-3 bg-white text-black rounded-xl font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="px-6 py-3 border border-gray-700 rounded-xl font-medium"
          >
            GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-800 rounded-2xl">
            <h2 className="text-xl font-semibold mb-3">About Me</h2>
            <p className="text-gray-300">
              I combine business understanding with technical analytics skills
              to solve real commercial and operational problems.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-2xl">
            <h2 className="text-xl font-semibold mb-3">Projects</h2>
            <p className="text-gray-300">
              Churn modeling, ETL workflows, KPI dashboards, and business case
              analysis.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-2xl">
            <h2 className="text-xl font-semibold mb-3">Skills</h2>
            <p className="text-gray-300">
              Python, SQL, Power BI, Qlik, Machine Learning, Excel, ETL.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}