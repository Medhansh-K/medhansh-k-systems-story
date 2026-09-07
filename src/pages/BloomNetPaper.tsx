import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Download,
  FileText,
  Share2,
  Check,
  Sparkles,
  ExternalLink,
  BookOpen,
  Layers,
  BarChart3,
  ShieldCheck,
  Cpu,
  Database,
  Printer,
  Copy,
} from "lucide-react";
import { bloomnetPaperData } from "@/data/bloomnetData";
import { toast } from "sonner";

const BloomNetPaper: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("sec-1");
  const [copiedCitation, setCopiedCitation] = useState(false);

  const paper = bloomnetPaperData;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: paper.title,
        text: `${paper.title} - ${paper.publication}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Paper link copied to clipboard!");
    }
  };

  const copyIEEEFormattedCitation = () => {
    const citation = `R. Soni, M. Panpatil, M. Khedekar, S. Navale, and R. Gaikwad, "${paper.title}," in ${paper.publication}, IEEE, ${paper.year}.`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    toast.success("IEEE Citation copied to clipboard!");
    setTimeout(() => setCopiedCitation(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#090b0e] text-zinc-200 selection:bg-amber-500/20 selection:text-amber-200 font-sans">
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 h-16 border-b border-zinc-800/80 bg-[#090b0e]/90 backdrop-blur-md">
        <div className="container mx-auto px-4 h-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/#projects")}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-xs font-medium flex items-center gap-1.5 text-zinc-300"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Portfolio</span>
            </button>

            <span className="h-4 w-px bg-zinc-800 hidden sm:block" />

            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono font-semibold">
              <Sparkles size={11} /> {paper.publisher} {paper.year}
            </span>
          </div>

          <div className="text-center truncate px-2 max-w-xs sm:max-w-md hidden md:block">
            <p className="text-xs font-bold text-white truncate">{paper.title}</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={paper.pdfUrl}
              download
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-black px-3.5 py-1.5 rounded-lg transition-all shadow-md shadow-amber-500/10"
            >
              <Download size={14} />
              <span className="hidden sm:inline">PDF</span>
            </a>

            <button
              onClick={copyIEEEFormattedCitation}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-zinc-300"
              title="Copy IEEE Citation"
            >
              {copiedCitation ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
            </button>

            <button onClick={handleShare} className="p-2 rounded-lg hover:bg-white/10 transition-colors text-zinc-300" title="Share Paper">
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="pt-24 pb-32 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Paper Header / Hero Banner */}
        <div className="border-b border-zinc-800 pb-10 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/30 font-semibold">
              IEEE Research Publication
            </span>
            <span className="text-xs font-mono text-zinc-500">• {paper.publication}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif tracking-tight leading-tight mb-6">
            {paper.title}
          </h1>

          {/* Authors List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 mb-8">
            {paper.authors.map((author, i) => (
              <div key={i} className="space-y-0.5">
                <h3 className={`text-sm font-semibold ${author.name.includes("Medhansh") ? "text-amber-400 font-bold" : "text-zinc-200"}`}>
                  {author.name} {author.name.includes("Medhansh") && "★"}
                </h3>
                <p className="text-[11px] text-zinc-400 line-clamp-1">{author.institution}</p>
                <p className="text-[10px] font-mono text-zinc-500">{author.email}</p>
              </div>
            ))}
          </div>

          {/* Abstract */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/20 via-zinc-900/40 to-zinc-950 border border-amber-500/30 relative">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
              <FileText size={14} /> Abstract
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed text-justify font-body mb-4">{paper.abstract}</p>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/60">
              <span className="text-[10px] font-mono uppercase text-zinc-500 mr-2 font-semibold">Keywords:</span>
              {paper.keywords.map((kw, idx) => (
                <span key={idx} className="text-[10px] font-mono bg-zinc-800/60 text-zinc-400 px-2 py-0.5 rounded border border-zinc-700/50">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Paper Layout: Left Table of Contents Sidebar + Right Full Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left TOC Sidebar */}
          <aside className="lg:col-span-3 sticky top-24 space-y-2 bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/60">
            <p className="text-[10px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-2 px-2">Sections</p>
            {paper.sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => {
                  setActiveSection(sec.id);
                  document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all block ${
                  activeSection === sec.id
                    ? "bg-amber-500/20 text-amber-400 font-bold border border-amber-500/40"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                }`}
              >
                <span className="font-mono opacity-60 mr-1.5">{sec.number}.</span>
                {sec.title}
              </button>
            ))}

            <div className="pt-3 border-t border-zinc-800/80 space-y-1">
              <p className="text-[10px] font-mono uppercase font-bold text-zinc-500 tracking-wider px-2 mb-1">Tables</p>
              {paper.tables.map((t) => (
                <button
                  key={t.id}
                  onClick={() => document.getElementById(t.id)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                  className="w-full text-left px-3 py-1.5 rounded-lg text-[11px] text-zinc-400 hover:text-amber-300 truncate block"
                >
                  {t.title}
                </button>
              ))}
            </div>
          </aside>

          {/* Right Paper Body Sections */}
          <div className="lg:col-span-9 space-y-12">
            {paper.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 border-b border-zinc-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-400">{sec.number}.</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">{sec.title}</h2>
                </div>

                <div className="space-y-4 text-sm text-zinc-300 leading-relaxed font-body">
                  {sec.content.map((pText, pIdx) => (
                    <p key={pIdx} className="text-justify">
                      {pText}
                    </p>
                  ))}
                </div>

                {/* Render tables associated with this section */}
                {sec.id === "sec-4" && (
                  <div className="space-y-8 pt-6">
                    {paper.tables.map((table) => (
                      <div key={table.id} id={table.id} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 space-y-3 overflow-x-auto">
                        <h4 className="text-xs font-mono font-bold text-amber-400 tracking-wide">{table.title}</h4>
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="border-b border-zinc-700 bg-zinc-800/60">
                              {table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="p-2.5 font-semibold text-zinc-200">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="border-b border-zinc-800/60 hover:bg-zinc-800/30 transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`p-2.5 font-mono ${
                                      cIdx === 2 && row[2]?.toString().includes("Bloom-Net")
                                        ? "text-amber-400 font-bold"
                                        : "text-zinc-300"
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* References Section */}
            <section className="pt-8 border-t border-zinc-800">
              <h2 className="text-lg font-bold text-white font-serif mb-4 flex items-center gap-2">
                <BookOpen size={16} className="text-amber-400" /> Key References
              </h2>
              <ol className="space-y-2 text-xs font-mono text-zinc-400 pl-4 list-decimal">
                {paper.references.map((ref, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {ref}
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BloomNetPaper;
