"use client";

import { useMemo, useState } from "react";
import {
  Trophy,
  BarChart3,
  Brain,
  Target,
  ChevronRight,
  Shield,
  Activity,
} from "lucide-react";

const teams = [
  "Real Madrid CF",
  "FC Barcelona",
  "Atlético de Madrid",
  "Sevilla FC",
  "Real Sociedad",
  "Villarreal CF",
  "Athletic Club de Bilbao",
  "Real Betis Balompié",
];

const teamStats: Record<
  string,
  {
    form: string[];
    cumPoints: number;
    goalsFor: number;
    goalsAgainst: number;
    homeStrength: number;
    awayStrength: number;
  }
> = {
  "Real Madrid CF": {
    form: ["W", "W", "D", "W", "W"],
    cumPoints: 78,
    goalsFor: 67,
    goalsAgainst: 24,
    homeStrength: 89,
    awayStrength: 84,
  },
  "FC Barcelona": {
    form: ["W", "D", "W", "W", "L"],
    cumPoints: 74,
    goalsFor: 71,
    goalsAgainst: 31,
    homeStrength: 87,
    awayStrength: 81,
  },
  "Atlético de Madrid": {
    form: ["W", "W", "L", "D", "W"],
    cumPoints: 70,
    goalsFor: 59,
    goalsAgainst: 28,
    homeStrength: 85,
    awayStrength: 79,
  },
  "Sevilla FC": {
    form: ["D", "W", "W", "L", "W"],
    cumPoints: 66,
    goalsFor: 54,
    goalsAgainst: 33,
    homeStrength: 81,
    awayStrength: 76,
  },
  "Real Sociedad": {
    form: ["W", "D", "L", "W", "W"],
    cumPoints: 62,
    goalsFor: 50,
    goalsAgainst: 35,
    homeStrength: 78,
    awayStrength: 74,
  },
  "Villarreal CF": {
    form: ["W", "L", "D", "W", "D"],
    cumPoints: 60,
    goalsFor: 57,
    goalsAgainst: 42,
    homeStrength: 77,
    awayStrength: 73,
  },
  "Athletic Club de Bilbao": {
    form: ["D", "W", "D", "L", "W"],
    cumPoints: 55,
    goalsFor: 45,
    goalsAgainst: 37,
    homeStrength: 75,
    awayStrength: 69,
  },
  "Real Betis Balompié": {
    form: ["W", "L", "W", "D", "L"],
    cumPoints: 53,
    goalsFor: 48,
    goalsAgainst: 44,
    homeStrength: 73,
    awayStrength: 68,
  },
};

function formColor(result: string) {
  if (result === "W") return "bg-emerald-500/20 text-emerald-300 border-emerald-400/30";
  if (result === "D") return "bg-amber-500/20 text-amber-300 border-amber-400/30";
  return "bg-rose-500/20 text-rose-300 border-rose-400/30";
}

export default function LaLigaProject() {
  const [homeTeam, setHomeTeam] = useState("FC Barcelona");
  const [awayTeam, setAwayTeam] = useState("Atlético de Madrid");

  const prediction = useMemo(() => {
    const home = teamStats[homeTeam];
    const away = teamStats[awayTeam];

    const formScore = (team: string[]) =>
      team.reduce((acc, item) => {
        if (item === "W") return acc + 3;
        if (item === "D") return acc + 1;
        return acc;
      }, 0);

    const homeForm = formScore(home.form);
    const awayForm = formScore(away.form);

    const strength =
      (home.cumPoints - away.cumPoints) * 0.35 +
      (home.goalsFor - away.goalsFor) * 0.15 -
      (home.goalsAgainst - away.goalsAgainst) * 0.15 +
      (home.homeStrength - away.awayStrength) * 0.4 +
      (homeForm - awayForm) * 0.8;

    const homeWin = Math.max(18, Math.min(74, Math.round(46 + strength * 0.55)));
    const draw = Math.max(14, Math.min(30, Math.round(25 - Math.abs(strength) * 0.12)));
    const awayWin = 100 - homeWin - draw;

    let outcome = "Home Win";
    if (draw >= homeWin && draw >= awayWin) outcome = "Draw";
    if (awayWin > homeWin && awayWin > draw) outcome = "Away Win";

    return { homeWin, draw, awayWin, outcome };
  }, [homeTeam, awayTeam]);

  const home = teamStats[homeTeam];
  const away = teamStats[awayTeam];

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-10 md:px-10 md:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />

      <div className="relative z-10">
        <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-cyan-400">
              Personal Project
            </p>

            <h1 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
              La Liga Match
              <span className="block text-cyan-400">Outcome Prediction</span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              This project focused on predicting La Liga match outcomes
              using historical football data, feature engineering, and machine
              learning. I transformed raw match information into a model that
              estimated whether a game would end in a home win, draw, or away win.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Machine Learning",
                "Random Forest",
                "Feature Engineering",
                "Historical Match Data",
                "Win / Draw / Loss",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full max-w-md rounded-[28px] border border-slate-800 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/15 p-3">
                <Brain className="h-6 w-6 text-cyan-300" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                  Model Snapshot
                </p>
                <h3 className="text-xl font-semibold text-white">
                  Match Predictor
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
                <p className="text-sm text-slate-400">Problem</p>
                <p className="mt-1 text-slate-200">
                  Predict match result before kickoff
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
                <p className="text-sm text-slate-400">Target</p>
                <p className="mt-1 text-slate-200">
                  Home Win / Draw / Away Win
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
                <p className="text-sm text-slate-400">Inputs used</p>
                <p className="mt-1 text-slate-200">
                  Team points, cumulative goals for and against, matchday context,
                  and home vs away performance
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-slate-800 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-500/15 p-3">
                <Target className="h-6 w-6 text-blue-300" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                  Interactive Demo
                </p>
                <h2 className="text-2xl font-bold text-white">
                  Live Match Prediction Card
                </h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-400">Home Team</label>
                <select
                  value={homeTeam}
                  onChange={(e) => setHomeTeam(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition focus:border-cyan-400"
                >
                  {teams.map((team) => (
                    <option key={team} value={team}>
                      {team}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">Away Team</label>
                <select
                  value={awayTeam}
                  onChange={(e) => setAwayTeam(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition focus:border-cyan-400"
                >
                  {teams.map((team) => (
                    <option key={team} value={team}>
                      {team}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 rounded-[28px] border border-slate-700 bg-slate-950/80 p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                    Predicted Fixture
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                    {homeTeam}
                  </h3>
                  <p className="mt-1 text-slate-400">vs</p>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    {awayTeam}
                  </h3>
                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                    Model Output
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {prediction.outcome}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: `${homeTeam} Win`, value: prediction.homeWin },
                  { label: "Draw", value: prediction.draw },
                  { label: `${awayTeam} Win`, value: prediction.awayWin },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="font-medium text-white">{item.value}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-800">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Home team form</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {home.form.map((item, index) => (
                      <span
                        key={`${item}-${index}`}
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${formColor(
                          item
                        )}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Away team form</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {away.form.map((item, index) => (
                      <span
                        key={`${item}-${index}`}
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${formColor(
                          item
                        )}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-slate-800 bg-white/5 p-6 backdrop-blur-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-500/15 p-3">
                  <BarChart3 className="h-6 w-6 text-emerald-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">What I Engineered</h2>
              </div>

              <div className="grid gap-3">
                {[
                  "Cumulative goals scored before each matchday",
                  "Cumulative goals conceded before each matchday",
                  "Team points up to the previous jornada",
                  "Home and away performance context",
                  "Historical match structure for classification",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
                  >
                    <ChevronRight className="mt-0.5 h-4 w-4 text-cyan-400" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-800 bg-white/5 p-6 backdrop-blur-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-2xl bg-amber-500/15 p-3">
                  <Activity className="h-6 w-6 text-amber-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">Project Flow</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "1. Data Preparation",
                    text: "Cleaned match data and aligned team naming across different sources.",
                  },
                  {
                    title: "2. Matchday Features",
                    text: "Built pre-match variables using information available up to the previous jornada.",
                  },
                  {
                    title: "3. Model Training",
                    text: "Structured the problem as a multi-class classification task.",
                  },
                  {
                    title: "4. Prediction Output",
                    text: "Estimated the likelihood of home win, draw, or away win.",
                  },
                ].map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
                  >
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-slate-400">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] border border-slate-800 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/15 p-3">
                <Trophy className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-xl font-bold text-white">Why it matters</h3>
            </div>
            <p className="text-slate-300">
              This project turned football intuition into a structured analytical
              problem and showed how data can support decision-making in sports.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-800 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-500/15 p-3">
                <Shield className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-white">Key insight</h3>
            </div>
            <p className="text-slate-300">
              Strong feature engineering mattered as much as model choice,
              especially when creating team-level variables before each fixture.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-800 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-500/15 p-3">
                <Brain className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="text-xl font-bold text-white">My role</h3>
            </div>
            <p className="text-slate-300">
              End-to-end ownership: data processing, feature engineering, model
              design, and translating technical work into a clear football story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}