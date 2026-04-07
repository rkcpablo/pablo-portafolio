import Link from "next/link";

export default function OpenbankPage() {
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
          SQL • Data Validation • ETL • Banking
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Openbank – Data Validation & Migration Support
        </h1>

        <p className="text-lg text-slate-300 max-w-3xl mb-10">
          Worked on SQL-based data validation and ETL verification processes to
          support reliable customer data, reporting, and downstream analytics in
          a fast-growing digital banking environment.
        </p>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-slate-800 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
            <p className="text-slate-300 leading-7">
              At Openbank, I supported the validation of transformed banking
              data to ensure that information delivered to downstream systems was
              accurate, complete, and reliable. My work focused on SQL-based
              validation, understanding ETL logic, and checking whether the
              resulting data correctly represented the underlying customer and
              transaction records.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-3">Business Context</h2>
            <p className="text-slate-300 leading-7">
              Openbank was scaling its digital banking operations while relying
              on cloud infrastructure, data pipelines, and customer-level
              analytics. Reliable validated data was essential because it fed
              reporting, KPI tracking, customer 360 views, and machine learning
              use cases.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-3">What I Did</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Built and used complex SQL queries to validate ETL outputs.</li>
              <li>Checked joins, filters, transformations, and field consistency.</li>
              <li>Verified data completeness and identified mismatches or missing values.</li>
              <li>Helped ensure Cliente360 data was accurate and ready for analysis.</li>
              <li>Worked with structured banking data across multiple systems and tables.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-3">Technical Challenges</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Validating large and nested SQL transformations.</li>
              <li>Interpreting technical documentation with unclear or complex rules.</li>
              <li>Handling multi-table relationships and transformation dependencies.</li>
              <li>Detecting inconsistencies in formats, missing values, and mapped categories.</li>
              <li>Ensuring transformations were correct without affecting unrelated rows.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-4">Data Pipeline Visual</h2>
            <p className="text-slate-300 mb-4 leading-7">
              This project sat inside a broader banking data pipeline: raw
              customer information was collected, stored, transformed through
              ETL processes, validated, and then delivered to systems used for
              customer analytics, KPI reporting, and predictive applications.
            </p>

            <div className="rounded-2xl border border-dashed border-slate-700 p-6 text-slate-400">
              Add your Openbank pipeline image here
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-3">Key Takeaways</h2>
            <p className="text-slate-300 leading-7">
              This experience strengthened my SQL skills, my understanding of
              ETL pipelines, and my ability to reason through data quality
              issues in real business environments. It also taught me how
              reliable data supports better analytics, reporting, and
              decision-making.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}