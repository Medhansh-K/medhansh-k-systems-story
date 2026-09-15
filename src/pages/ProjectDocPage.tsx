import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Share2,
  Sparkles,
  FileText,
  Search,
  CheckCircle2,
  Layers,
  BarChart3,
  Cpu,
  Target,
  Workflow,
  Shield,
  Zap,
  TrendingUp,
  FlaskConical,
  Compass,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { projectDocsData } from "@/data/projectDocsData";
import { toast } from "sonner";

type TabId = "teardown" | "prd" | "prioritization" | "userflow" | "metrics" | "architecture";

export const ProjectDocPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>("teardown");

  const doc = projectId && projectDocsData[projectId] ? projectDocsData[projectId] : projectDocsData.dabby;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${doc.name} - Product Documentation`,
        text: doc.heroSummary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Documentation link copied to clipboard!");
    }
  };

  const tabs: { id: TabId; label: string; icon: React.ElementType }[] = [
    { id: "teardown", label: "Product Teardown", icon: Search },
    { id: "prd", label: "PRD", icon: FileText },
    { id: "prioritization", label: "Feature Prioritization", icon: Target },
    { id: "userflow", label: "User-Flow Redesign", icon: Workflow },
    { id: "metrics", label: "Metrics & Experiments", icon: BarChart3 },
    { id: "architecture", label: "Technical Architecture", icon: Cpu },
  ];

  return (
    <div className="min-h-screen bg-[#08090c] text-zinc-200 selection:bg-accent/20 selection:text-accent font-sans">
      {/* Top Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 h-16 border-b border-zinc-800/80 bg-[#08090c]/90 backdrop-blur-md">
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

            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono font-semibold">
              <Sparkles size={11} /> {doc.badge}
            </span>
          </div>

          <div className="text-center truncate px-2 max-w-xs sm:max-w-md hidden md:block">
            <p className="text-xs font-bold text-white truncate">{doc.name} — Product & Systems Engineering Docs</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={doc.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-accent hover:bg-accent/90 text-primary-foreground px-3.5 py-1.5 rounded-lg transition-all shadow-md shadow-accent/10"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">Visit Live Site</span>
            </a>

            <button onClick={handleShare} className="p-2 rounded-lg hover:bg-white/10 transition-colors text-zinc-300" title="Share Documentation">
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-24 pb-32 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Project Banner Header */}
        <div className="border-b border-zinc-800/80 pb-8 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-md border border-accent/30 font-semibold">
              {doc.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight leading-tight mb-3">
            {doc.name} <span className="text-accent text-2xl sm:text-3xl font-normal block sm:inline mt-1 sm:mt-0">— {doc.tagline}</span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base font-body max-w-3xl leading-relaxed mb-6">{doc.heroSummary}</p>

          {/* Key Overview Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <div className="space-y-1">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <AlertTriangle size={13} /> The Problem
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-body">{doc.overview.problemStatement}</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Compass size={13} /> Target Audience
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-body">{doc.overview.targetMarket}</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Zap size={13} /> Core Solution
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-body">{doc.overview.solutionOverview}</p>
            </div>
          </div>
        </div>

        {/* Horizontal Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-zinc-800/80 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-accent text-primary-foreground shadow-lg shadow-accent/20 scale-105"
                    : "bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800/60"
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            {/* 1. PRODUCT TEARDOWN */}
            {activeTab === "teardown" && (
              <div className="space-y-8">
                {/* UX Friction & Market Gaps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-4">
                    <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                      <AlertTriangle size={16} /> Key UX Friction Points
                    </h3>
                    <ul className="space-y-3">
                      {doc.productTeardown.uxFrictionPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed font-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-4">
                    <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                      <Search size={16} /> Market Gaps & Opportunities
                    </h3>
                    <ul className="space-y-3">
                      {doc.productTeardown.marketGaps.map((gap, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed font-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span>{gap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Competitive Overview Matrix */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4">
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <Layers size={16} className="text-accent" /> Competitive Teardown & Product Moat
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-zinc-800 bg-zinc-900/80 text-zinc-400 font-mono">
                          <th className="p-3">Competitor / Existing Solution</th>
                          <th className="p-3">Critical Structural Gap</th>
                          <th className="p-3 text-accent font-bold">{doc.name} Product Advantage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {doc.productTeardown.competitiveLandscape.map((row, i) => (
                          <tr key={i} className="border-b border-zinc-800/60 hover:bg-zinc-900/40 transition-colors">
                            <td className="p-3 font-semibold text-white">{row.competitor}</td>
                            <td className="p-3 text-zinc-400 font-body">{row.gap}</td>
                            <td className="p-3 text-accent font-semibold font-body bg-accent/5">{row.dabbyAdvantage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Core Strategic Insights Callout */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-accent/10 via-zinc-900/60 to-zinc-950 border border-accent/30 space-y-3">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                    <Lightbulb size={14} /> Strategic Teardown Insights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {doc.productTeardown.coreInsights.map((insight, i) => (
                      <div key={i} className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 font-body leading-relaxed">
                        "{insight}"
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. PRD (PRODUCT REQUIREMENTS DOCUMENT) */}
            {activeTab === "prd" && (
              <div className="space-y-8">
                {/* Vision Statement */}
                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent">Product Vision Statement</h3>
                  <p className="text-base text-white font-serif italic leading-relaxed">"{doc.prd.vision}"</p>
                </div>

                {/* Target User Personas */}
                <div className="space-y-4">
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <Compass size={16} className="text-accent" /> User Personas & Pain Points
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {doc.prd.personas.map((persona, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3">
                        <span className="text-xs font-mono uppercase font-bold text-accent bg-accent/10 px-2.5 py-1 rounded border border-accent/20 inline-block">
                          {persona.role}
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-white mb-1">Core Need:</p>
                          <p className="text-xs text-zinc-400 font-body leading-relaxed">{persona.needs}</p>
                        </div>
                        <div className="pt-2 border-t border-zinc-800">
                          <p className="text-xs font-semibold text-amber-400 mb-1">Primary Pain Point:</p>
                          <p className="text-xs text-zinc-400 font-body leading-relaxed">{persona.painPoint}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Functional & Non-Functional Requirements */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-4">
                    <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                      <FileText size={16} className="text-accent" /> Functional Requirements
                    </h3>
                    <div className="space-y-3">
                      {doc.prd.functionalRequirements.map((req, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-accent font-bold uppercase">{req.category}</span>
                            <span className="text-[10px] font-mono text-emerald-400 font-semibold">{req.impact}</span>
                          </div>
                          <p className="text-xs text-zinc-200 font-body leading-relaxed">{req.requirement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-4">
                    <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                      <Shield size={16} className="text-cyan-400" /> Non-Functional SLAs & Targets
                    </h3>
                    <div className="space-y-3">
                      {doc.prd.nonFunctionalRequirements.map((sla, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white">{sla.metric}</span>
                            <span className="text-xs font-mono font-bold text-cyan-400">{sla.target}</span>
                          </div>
                          <p className="text-[11px] text-zinc-400 font-body">Strategy: {sla.strategy}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. FEATURE PRIORITIZATION */}
            {activeTab === "prioritization" && (
              <div className="space-y-8">
                {/* Prioritization Framework Matrix */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                      <Target size={16} className="text-accent" /> Feature Prioritization Matrix
                    </h3>
                    <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/30 font-semibold">
                      RICE & MoSCoW Scored
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-zinc-800 bg-zinc-900/80 text-zinc-400 font-mono">
                          <th className="p-3">Priority</th>
                          <th className="p-3">Feature Name</th>
                          <th className="p-3">Description</th>
                          <th className="p-3">Reach</th>
                          <th className="p-3">Impact</th>
                          <th className="p-3">Confidence</th>
                          <th className="p-3">Effort</th>
                          <th className="p-3 text-accent">Framework Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        {doc.featurePrioritization.matrix.map((row, i) => (
                          <tr key={i} className="border-b border-zinc-800/60 hover:bg-zinc-900/60 transition-colors">
                            <td className="p-3">
                              <span
                                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                                  row.priority === "P0"
                                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                    : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                                }`}
                              >
                                {row.priority}
                              </span>
                            </td>
                            <td className="p-3 font-semibold text-white">{row.feature}</td>
                            <td className="p-3 text-zinc-400 font-body">{row.description}</td>
                            <td className="p-3 font-mono text-zinc-300">{row.reach}</td>
                            <td className="p-3 font-mono text-zinc-300">{row.impact}</td>
                            <td className="p-3 font-mono text-zinc-300">{row.confidence}</td>
                            <td className="p-3 font-mono text-zinc-300">{row.effort}</td>
                            <td className="p-3 font-mono font-bold text-accent">{row.framework}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Product Roadmap Timeline */}
                <div className="space-y-4">
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <TrendingUp size={16} className="text-accent" /> Quarterly Product Delivery Roadmap
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {doc.featurePrioritization.roadmap.map((phase, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3 relative overflow-hidden">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-accent uppercase">{phase.phase}</span>
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        </div>
                        <h4 className="text-sm font-bold text-white">{phase.title}</h4>
                        <ul className="space-y-2 pt-2 border-t border-zinc-800">
                          {phase.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-body">
                              <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 4. USER-FLOW REDESIGN */}
            {activeTab === "userflow" && (
              <div className="space-y-8">
                {/* Step-by-Step User Journey Transformation */}
                <div className="space-y-4">
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <Workflow size={16} className="text-accent" /> Before vs. After User Journey Transformation
                  </h3>
                  <div className="space-y-4">
                    {doc.userFlowRedesign.journeySteps.map((step) => (
                      <div key={step.step} className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-2.5">
                            <span className="w-7 h-7 rounded-full bg-accent/20 text-accent border border-accent/40 font-mono font-bold text-xs flex items-center justify-center">
                              0{step.step}
                            </span>
                            <h4 className="text-sm font-bold text-white">{step.title}</h4>
                          </div>
                          <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                            {step.benefit}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 space-y-1">
                            <span className="text-[10px] font-mono uppercase font-bold text-red-400">Legacy Flow (Before)</span>
                            <p className="text-xs text-zinc-300 font-body leading-relaxed">{step.before}</p>
                          </div>
                          <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
                            <span className="text-[10px] font-mono uppercase font-bold text-emerald-400">Redesigned Flow (After)</span>
                            <p className="text-xs text-zinc-300 font-body leading-relaxed">{step.after}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key UX Design Decisions */}
                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-3">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                    <Lightbulb size={14} /> Key Interaction & Design Principles
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {doc.userFlowRedesign.keyDesignDecisions.map((decision, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 font-body leading-relaxed">
                        • {decision}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 5. METRICS & EXPERIMENTATION */}
            {activeTab === "metrics" && (
              <div className="space-y-8">
                {/* Metric Dashboard Callouts */}
                <div className="space-y-4">
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <BarChart3 size={16} className="text-accent" /> Key Product Performance Telemetry
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {doc.metricsAndExperiments.metrics.map((m, i) => (
                      <div
                        key={i}
                        className={`p-5 rounded-2xl border space-y-2 ${
                          m.type === "northstar"
                            ? "bg-gradient-to-br from-accent/20 via-zinc-900 to-zinc-950 border-accent/50 shadow-lg shadow-accent/10"
                            : "bg-zinc-900/50 border-zinc-800"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded ${
                              m.type === "northstar"
                                ? "bg-accent text-primary-foreground"
                                : m.type === "guardrail"
                                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                                : "bg-zinc-800 text-zinc-400"
                            }`}
                          >
                            {m.type}
                          </span>
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-bold font-mono text-white">{m.value}</h4>
                        <p className="text-xs font-semibold text-zinc-300">{m.label}</p>
                        <p className="text-[11px] text-zinc-500 font-body leading-tight">{m.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* A/B Testing & Experimentation Framework */}
                <div className="space-y-4">
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <FlaskConical size={16} className="text-accent" /> A/B Testing Hypotheses & Experiments
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {doc.metricsAndExperiments.experiments.map((exp) => (
                      <div key={exp.id} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-4">
                        <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                          <span className="shrink-0 whitespace-nowrap text-xs font-mono font-bold text-accent bg-accent/10 px-2.5 py-1 rounded border border-accent/20">
                            {exp.id}
                          </span>
                          <span className="shrink-0 whitespace-nowrap text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                            {exp.expectedLift}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-white">{exp.title}</h4>
                        <p className="text-xs text-zinc-300 font-body leading-relaxed bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/80">
                          <span className="font-semibold text-accent">Hypothesis:</span> {exp.hypothesis}
                        </p>

                        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-zinc-800">
                          <div>
                            <span className="text-zinc-500 block">Primary Metric:</span>
                            <span className="text-white font-semibold">{exp.primaryMetric}</span>
                          </div>
                          <div>
                            <span className="text-zinc-500 block">Guardrail Metric:</span>
                            <span className="text-red-400 font-semibold">{exp.guardrailMetric}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 6. TECHNICAL ARCHITECTURE DECISION */}
            {activeTab === "architecture" && (
              <div className="space-y-8">
                {/* System Topology Rationale */}
                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                    <Cpu size={14} /> High-Level Topology Strategy
                  </h3>
                  <p className="text-sm text-zinc-300 font-body leading-relaxed">{doc.technicalArchitecture.topologyDescription}</p>
                </div>

                {/* Architecture Decisions Matrix */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <Shield size={16} className="text-accent" /> Architectural Trade-off Decisions
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-zinc-800 bg-zinc-900/80 text-zinc-400 font-mono">
                          <th className="p-3">System Subcomponent</th>
                          <th className="p-3">Selected Technology</th>
                          <th className="p-3">Engineering Rationale</th>
                          <th className="p-3 text-amber-400">Known Tradeoffs</th>
                        </tr>
                      </thead>
                      <tbody>
                        {doc.technicalArchitecture.decisions.map((item, i) => (
                          <tr key={i} className="border-b border-zinc-800/60 hover:bg-zinc-900/60 transition-colors">
                            <td className="p-3 font-semibold text-white">{item.component}</td>
                            <td className="p-3 font-mono text-accent font-semibold">{item.technology}</td>
                            <td className="p-3 text-zinc-300 font-body leading-relaxed">{item.rationale}</td>
                            <td className="p-3 text-zinc-400 font-body italic bg-zinc-950/40">{item.tradeoffs}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Data Pipeline & Security Protocols */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-4">
                    <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                      <Workflow size={16} className="text-accent" /> End-to-End Execution Flow
                    </h3>
                    <ol className="space-y-2.5 text-xs text-zinc-300 font-mono">
                      {doc.technicalArchitecture.pipelineSteps.map((step, i) => (
                        <li key={i} className="p-2.5 rounded-lg bg-zinc-950/50 border border-zinc-800/80 leading-relaxed">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-4">
                    <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                      <Shield size={16} className="text-emerald-400" /> Security, Compliance & Scale
                    </h3>
                    <ul className="space-y-3">
                      {doc.technicalArchitecture.securityAndScale.map((sec, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed font-body">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{sec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ProjectDocPage;
