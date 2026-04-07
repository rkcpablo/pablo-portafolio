import Link from "next/link";

export default function OpenbankPage() {
    const tags = ["SQL", "ETL", "Data Validation", "Banking", "Cloud"];

    const responsibilities = [
        "Validated ETL outputs with complex SQL queries",
        "Checked joins, filters, and transformation logic",
        "Detected missing values and inconsistent records",
        "Helped ensure reliable customer-level analytical data",
    ];

    const challenges = [
        {
            title: "Complex SQL",
            text: "Worked through nested queries and transformation logic under SQL-only validation workflows.",
        },
        {
            title: "Data Quality",
            text: "Identified inconsistencies, missing values, and incorrect mappings before data reached reporting layers.",
        },
        {
            title: "Table Relationships",
            text: "Reasoned through multi-table dependencies to validate transformations without breaking unrelated records.",
        },
    ];

    const takeaways = [
        "Stronger SQL reasoning",
        "Better understanding of ETL pipelines",
        "Real exposure to business-critical data quality work",
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
                        Openbank 
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Data Validation & Migration Support
                        </h1>

                        <a
                            href="https://www.openbank.es/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition"
                        >
                            <img
                                src="/openbank-logo.png"
                                alt="Openbank logo"
                                className="h-14 md:h-16 rounded-xl bg-white p-2"
                            />
                        </a>
                    </div>

                    <p className="text-lg text-slate-300 max-w-3xl mb-6">
                        Supported SQL-based validation and ETL verification processes to help
                        maintain reliable customer and transactional data in a digital banking environment.
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
                            My work supported data reliability for downstream reporting, customer-level
                            analytics, and decision-making processes in a fast-scaling banking setting.
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

                <div className="mb-10 rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-sm p-6">
                    <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>

                    <img
                        src="/openbank-tech-visual.png"
                        alt="SQL cloud workflow and analytics architecture"
                        className="rounded-2xl border border-slate-800 w-full"
                    />
                </div>

            </section>
        </main>
    );
}