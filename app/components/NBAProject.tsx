"use client";

import { useMemo, useState } from "react";
import { BarChart3, DollarSign, TrendingDown, TrendingUp, Target, Users } from "lucide-react";
import Link from "next/link";

type Player = {
    name: string;
    team: string;
    position: string;
    actualSalary: number;
    predictedSalary: number;
    points: number;
    rebounds: number;
    assists: number;
    experience: number;
    cluster: string;
    summary: string;
};

const players: Player[] = [
    {
        name: "Tyrese Haliburton",
        team: "Pacers",
        position: "PG",
        actualSalary: 41.0,
        predictedSalary: 46.5,
        points: 20.1,
        rebounds: 3.9,
        assists: 10.9,
        experience: 5,
        cluster: "Star playmaker",
        summary:
            "Elite creation and playmaking profile. Model flags him as undervalued relative to offensive impact.",
    },
    {
        name: "Rudy Gobert",
        team: "Timberwolves",
        position: "C",
        actualSalary: 43.8,
        predictedSalary: 35.2,
        points: 14.0,
        rebounds: 12.9,
        assists: 1.3,
        experience: 12,
        cluster: "Defensive anchor",
        summary:
            "Strong defensive specialist with premium veteran salary. Model sees contract above expected production value.",
    },
    {
        name: "Desmond Bane",
        team: "Grizzlies",
        position: "SG",
        actualSalary: 34.0,
        predictedSalary: 38.8,
        points: 23.7,
        rebounds: 4.4,
        assists: 5.5,
        experience: 5,
        cluster: "Scoring creator",
        summary:
            "Efficient scorer with secondary creation. Model values his all-around profile above current salary.",
    },
    {
        name: "Bradley Beal",
        team: "Suns",
        position: "SG",
        actualSalary: 50.2,
        predictedSalary: 37.9,
        points: 18.2,
        rebounds: 4.4,
        assists: 5.0,
        experience: 13,
        cluster: "Veteran scorer",
        summary:
            "Long-term contract and veteran status push salary above model expectation.",
    },
    {
        name: "Jalen Brunson",
        team: "Knicks",
        position: "PG",
        actualSalary: 24.9,
        predictedSalary: 39.1,
        points: 28.7,
        rebounds: 3.6,
        assists: 6.7,
        experience: 6,
        cluster: "Star guard",
        summary:
            "Huge offensive responsibility and strong production. Model marks him as one of the clearest bargains.",
    },
    {
        name: "Tobias Harris",
        team: "Pistons",
        position: "PF",
        actualSalary: 25.4,
        predictedSalary: 19.3,
        points: 17.2,
        rebounds: 6.5,
        assists: 3.1,
        experience: 13,
        cluster: "Veteran forward",
        summary:
            "Stable veteran production, but salary comes in above model estimate.",
    },
];

const insights = [
    "Experience is one of the strongest salary drivers.",
    "Points, rebounds and assists show a strong positive relationship with salary.",
    "Long-term contracts create inefficiencies between actual and expected pay.",
    "Clustering helps separate stars, balanced contributors and role specialists.",
];

function formatMoney(value: number) {
    return `$${value.toFixed(1)}M`;
}

function clampPercent(value: number, max: number) {
    return Math.max(8, (value / max) * 100);
}

export default function NBAProject() {
    const [selectedPlayer, setSelectedPlayer] = useState(players[0].name);

    const selected = useMemo(
        () => players.find((player) => player.name === selectedPlayer) ?? players[0],
        [selectedPlayer]
    );

    const difference = selected.actualSalary - selected.predictedSalary;
    const isOverpaid = difference > 0;
    const maxSalary = Math.max(...players.flatMap((p) => [p.actualSalary, p.predictedSalary])) * 1.15;

    const mostOverpaid = [...players]
        .sort((a, b) => b.actualSalary - b.predictedSalary - (a.actualSalary - a.predictedSalary))
        .slice(0, 3);

    const mostUnderpaid = [...players]
        .sort((a, b) => a.actualSalary - a.predictedSalary - (b.actualSalary - b.predictedSalary))
        .slice(0, 3);

    return (

        <main className="min-h-screen bg-[#07111f] text-white">
            <div className="mx-auto max-w-7xl px-6 pt-6 md:px-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition"
                >
                    ← Back to Portfolio
                </Link>
            </div>
            <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
                <div className="mb-16 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.28em] text-cyan-400">
                            Personal Project
                        </p>

                        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                            NBA Salary Intelligence
                        </h1>

                        <p className="mb-8 max-w-3xl text-lg text-slate-300 md:text-xl">
                            A machine learning project that estimates what NBA players should earn
                            based on performance, then compares expected vs actual salary to uncover
                            overpaid contracts and hidden value.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#salary-analyzer"
                                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105"
                            >
                                Explore Player Insights
                            </a>

                            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300">
                                Linear Regression + Clustering
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                        <div className="mb-5 flex items-center justify-between">
                            <span className="text-sm uppercase tracking-[0.22em] text-cyan-400">
                                Project Snapshot
                            </span>
                            <BarChart3 className="h-5 w-5 text-cyan-300" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                                <p className="mb-2 text-sm text-slate-400">Main Question</p>
                                <p className="text-sm text-slate-200">
                                    Which players are overpaid or undervalued relative to their production?
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                                <p className="mb-2 text-sm text-slate-400">Approach</p>
                                <p className="text-sm text-slate-200">
                                    Predict salary from player stats, then compare with actual market pay.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                                <p className="mb-2 text-sm text-slate-400">Model Finding</p>
                                <p className="text-sm text-slate-200">
                                    Salary is influenced by performance, but contracts add inefficiencies.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <section
                    id="salary-analyzer"
                    className="mb-16 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm md:p-8"
                >
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="mb-2 text-sm uppercase tracking-[0.22em] text-cyan-400">
                                Interactive Demo
                            </p>
                            <h2 className="text-3xl font-bold md:text-4xl">Player Salary Analyzer</h2>
                            <p className="mt-3 max-w-2xl text-slate-300">
                                Select a player to compare real salary against model-estimated salary
                                and see whether the contract looks overpriced or undervalued.
                            </p>
                        </div>

                        <div className="w-full md:w-[300px]">
                            <label className="mb-2 block text-sm text-slate-400">Choose player</label>
                            <select
                                value={selectedPlayer}
                                onChange={(e) => setSelectedPlayer(e.target.value)}
                                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                            >
                                {players.map((player) => (
                                    <option key={player.name} value={player.name}>
                                        {player.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                        <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-6">
                            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold">{selected.name}</h3>
                                    <p className="mt-1 text-slate-400">
                                        {selected.team} · {selected.position} · {selected.cluster}
                                    </p>
                                </div>

                                <div
                                    className={`rounded-full px-4 py-2 text-sm font-semibold ${isOverpaid
                                            ? "bg-red-500/15 text-red-300"
                                            : "bg-emerald-500/15 text-emerald-300"
                                        }`}
                                >
                                    {isOverpaid ? "Overpaid vs model" : "Undervalued vs model"}
                                </div>
                            </div>

                            <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                <StatCard
                                    icon={<DollarSign className="h-4 w-4" />}
                                    label="Actual Salary"
                                    value={formatMoney(selected.actualSalary)}
                                />
                                <StatCard
                                    icon={<Target className="h-4 w-4" />}
                                    label="Predicted Salary"
                                    value={formatMoney(selected.predictedSalary)}
                                />
                                <StatCard
                                    icon={
                                        isOverpaid ? (
                                            <TrendingUp className="h-4 w-4" />
                                        ) : (
                                            <TrendingDown className="h-4 w-4" />
                                        )
                                    }
                                    label="Difference"
                                    value={`${difference > 0 ? "+" : ""}${formatMoney(difference)}`}
                                />
                                <StatCard
                                    icon={<Users className="h-4 w-4" />}
                                    label="Experience"
                                    value={`${selected.experience} yrs`}
                                />
                            </div>

                            <div className="space-y-5">
                                <SalaryBar
                                    label="Actual salary"
                                    value={selected.actualSalary}
                                    displayValue={formatMoney(selected.actualSalary)}
                                    width={clampPercent(selected.actualSalary, maxSalary)}
                                    tone="actual"
                                />
                                <SalaryBar
                                    label="Predicted salary"
                                    value={selected.predictedSalary}
                                    displayValue={formatMoney(selected.predictedSalary)}
                                    width={clampPercent(selected.predictedSalary, maxSalary)}
                                    tone="predicted"
                                />
                            </div>

                            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                                <p className="mb-2 text-sm uppercase tracking-[0.18em] text-cyan-400">
                                    Interpretation
                                </p>
                                <p className="text-slate-300">{selected.summary}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-6">
                                <h3 className="mb-5 text-xl font-bold">Performance Snapshot</h3>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    <MiniMetric label="Points" value={selected.points} />
                                    <MiniMetric label="Rebounds" value={selected.rebounds} />
                                    <MiniMetric label="Assists" value={selected.assists} />
                                </div>
                            </div>

                            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-6">
                                <h3 className="mb-5 text-xl font-bold">How the project works</h3>
                                <div className="space-y-4">
                                    <Step
                                        number="01"
                                        title="Performance data"
                                        text="Player box-score and efficiency metrics are used as inputs."
                                    />
                                    <Step
                                        number="02"
                                        title="Salary prediction"
                                        text="A regression model estimates expected salary based on statistical profile."
                                    />
                                    <Step
                                        number="03"
                                        title="Inefficiency detection"
                                        text="Expected and actual pay are compared to highlight under- and overpaid contracts."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-16 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-[2rem] border border-emerald-400/15 bg-emerald-500/10 p-6">
                        <p className="mb-2 text-sm uppercase tracking-[0.22em] text-emerald-300">
                            Hidden Value
                        </p>
                        <h3 className="mb-5 text-2xl font-bold">Most Undervalued</h3>
                        <div className="space-y-4">
                            {mostUnderpaid.map((player) => (
                                <RankCard
                                    key={player.name}
                                    name={player.name}
                                    subtitle={`${player.team} · ${player.position}`}
                                    value={`+${formatMoney(player.predictedSalary - player.actualSalary)}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-red-400/15 bg-red-500/10 p-6">
                        <p className="mb-2 text-sm uppercase tracking-[0.22em] text-red-300">
                            Contract Premium
                        </p>
                        <h3 className="mb-5 text-2xl font-bold">Most Overpaid</h3>
                        <div className="space-y-4">
                            {mostOverpaid.map((player) => (
                                <RankCard
                                    key={player.name}
                                    name={player.name}
                                    subtitle={`${player.team} · ${player.position}`}
                                    value={`+${formatMoney(player.actualSalary - player.predictedSalary)}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                        <p className="mb-2 text-sm uppercase tracking-[0.22em] text-cyan-400">
                            Key Findings
                        </p>
                        <h3 className="mb-5 text-2xl font-bold">What the analysis suggests</h3>

                        <div className="space-y-4">
                            {insights.map((insight) => (
                                <div
                                    key={insight}
                                    className="rounded-3xl border border-white/10 bg-slate-950/50 p-4 text-slate-300"
                                >
                                    {insight}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                        <p className="mb-2 text-sm uppercase tracking-[0.22em] text-cyan-400">
                            Final Takeaway
                        </p>
                        <h3 className="mb-5 text-2xl font-bold">Why this project matters</h3>

                        <div className="space-y-4 text-slate-300">
                            <p>
                                NBA salaries are not purely performance-driven. Experience, long-term
                                contracts and market dynamics can create gaps between what a player is
                                paid and what a data-driven model would expect.
                            </p>
                            <p>
                                This project reframes a machine learning exercise into a front-office
                                analytics tool: a way to evaluate contract efficiency, identify hidden
                                value and support better decision-making.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}

function StatCard({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                {icon}
            </div>
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-1 text-xl font-bold">{value}</p>
        </div>
    );
}

function SalaryBar({
    label,
    displayValue,
    width,
    tone,
}: {
    label: string;
    value: number;
    displayValue: string;
    width: number;
    tone: "actual" | "predicted";
}) {
    const toneClass =
        tone === "actual"
            ? "bg-gradient-to-r from-cyan-400 to-blue-500"
            : "bg-gradient-to-r from-emerald-400 to-teal-500";

    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <p className="text-sm text-slate-300">{label}</p>
                <p className="text-sm font-semibold text-white">{displayValue}</p>
            </div>

            <div className="h-4 overflow-hidden rounded-full bg-white/10">
                <div
                    className={`h-full rounded-full ${toneClass} transition-all duration-700`}
                    style={{ width: `${width}%` }}
                />
            </div>
        </div>
    );
}

function MiniMetric({ label, value }: { label: string; value: number }) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-1 text-2xl font-bold">{value}</p>
        </div>
    );
}

function Step({
    number,
    title,
    text,
}: {
    number: string;
    title: string;
    text: string;
}) {
    return (
        <div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 font-semibold text-cyan-300">
                {number}
            </div>
            <div>
                <p className="font-semibold text-white">{title}</p>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
            </div>
        </div>
    );
}

function RankCard({
    name,
    subtitle,
    value,
}: {
    name: string;
    subtitle: string;
    value: string;
}) {
    return (
        <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-4">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <p className="font-semibold text-white">{name}</p>
                    <p className="text-sm text-slate-400">{subtitle}</p>
                </div>
                <p className="text-sm font-semibold text-white">{value}</p>
            </div>
        </div>
    );
}