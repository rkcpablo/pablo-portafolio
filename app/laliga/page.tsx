import LaLigaProject from "../components/LaLigaProject";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 md:px-10">

      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 mb-6 transition"
      >
        ← Back to Portfolio
      </Link>

      {/* Your component */}
      <LaLigaProject />

    </main>
  );
}

