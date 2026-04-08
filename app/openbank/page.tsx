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
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-4">
                                Openbank
                            </p>

                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Data Validation & Migration Support
                            </h1>

                            <p className="text-lg text-slate-300 max-w-3xl mb-6">
                                Supported SQL-based validation and ETL verification processes to help
                                maintain reliable customer and transactional data in a digital banking
                                environment.
                            </p>
                        </div>

                        <img
                            src="/openbank-logo.png"
                            alt="Openbank logo"
                            className="h-24 md:h-28 rounded-2xl bg-white p-3 shadow-lg"
                        />
                    </div>

                    <div className="mb-6">
                        <p className="text-sm text-slate-400 mb-3">
                            Click here to learn more about Openbank
                        </p>

                        <a
                            href="https://www.openbank.es/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 hover:scale-105 transition"
                        >
                            <span className="text-cyan-400 text-sm font-medium">
                                Visit Website →
                            </span>
                        </a>
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
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
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

                    <p className="text-xs text-slate-400 italic mb-4">
                        The query, concepts, and information displayed below are purely illustrative
                        and DO NOT represent any actual company data.
                    </p>

                    <div className="rounded-2xl border border-slate-300 bg-white shadow-xl overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-100">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                            </div>
                            <span className="text-xs text-slate-500 font-mono">
                                openbank_validation.sql
                            </span>
                        </div>

                        <div className="max-h-80 overflow-y-auto overflow-x-auto px-4 py-4 bg-white">
                            <pre className="text-sm font-mono leading-6 whitespace-pre text-emerald-700">
                                {`WITH customers_clean AS (
    SELECT
        customer_id,
        UPPER(TRIM(first_name)) AS first_name,
        UPPER(TRIM(last_name)) AS last_name,
        LOWER(TRIM(email)) AS email,
        REGEXP_REPLACE(phone_number, '[^0-9]', '', 'g') AS clean_phone,
        status AS customer_status
    FROM core.customers
),

accounts_clean AS (
    SELECT
        account_id,
        customer_id,
        iban,
        account_type,
        currency_code,
        status AS account_status
    FROM core.accounts
),

transactions_clean AS (
    SELECT
        transaction_id,
        account_id,
        transaction_date,
        amount,
        currency_code,
        UPPER(TRIM(transaction_type)) AS transaction_type,
        REGEXP_REPLACE(UPPER(description), '[^A-Z0-9 ]', '', 'g') AS clean_description,
        status AS transaction_status
    FROM core.transactions
    WHERE transaction_date >= DATE '2024-01-01'
)

SELECT
    t.transaction_id,
    t.transaction_date,
    c.customer_id,
    c.first_name,
    c.last_name,
    c.email,
    a.iban,
    a.account_type,
    t.transaction_type,
    t.amount,
    t.currency_code,
    t.clean_description,
    CASE
        WHEN c.email NOT LIKE '%@%.%' THEN 'INVALID_EMAIL'
        WHEN LENGTH(c.clean_phone) < 9 THEN 'INVALID_PHONE'
        WHEN a.account_status <> 'ACTIVE'
             AND t.transaction_status = 'SETTLED'
        THEN 'ACCOUNT_STATUS_MISMATCH'
        ELSE 'OK'
    END AS validation_result
FROM transactions_clean t
INNER JOIN accounts_clean a
    ON t.account_id = a.account_id
INNER JOIN customers_clean c
    ON a.customer_id = c.customer_id
ORDER BY t.transaction_date DESC;`}
                            </pre>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}